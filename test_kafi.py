"""Tests for kafi.py — minimal CLI task tracker.

Coverage targets:
  - load_tasks / save_tasks (file I/O layer)
  - add_task / list_tasks / complete_task / delete_task (business logic)
  - main() (CLI dispatch)
  - Edge cases and known gaps (ID collision, bad JSON, ValueError, empty title)
"""

import json
import sys
from pathlib import Path
from unittest.mock import patch

import pytest

import kafi


# ---------------------------------------------------------------------------
# Helpers / fixtures
# ---------------------------------------------------------------------------

@pytest.fixture(autouse=True)
def isolate_tasks_file(tmp_path, monkeypatch):
    """Redirect TASKS_FILE to a temp directory so tests never touch ~/.kafi_tasks.json."""
    tmp_file = tmp_path / "kafi_tasks.json"
    monkeypatch.setattr(kafi, "TASKS_FILE", tmp_file)
    return tmp_file


def write_tasks(tasks: list[dict], tasks_file: Path) -> None:
    tasks_file.write_text(json.dumps(tasks, indent=2))


# ---------------------------------------------------------------------------
# load_tasks
# ---------------------------------------------------------------------------

class TestLoadTasks:
    def test_returns_empty_list_when_file_missing(self):
        assert kafi.load_tasks() == []

    def test_returns_tasks_from_existing_file(self, isolate_tasks_file):
        tasks = [{"id": 1, "title": "Buy milk", "done": False}]
        write_tasks(tasks, isolate_tasks_file)
        assert kafi.load_tasks() == tasks

    def test_returns_multiple_tasks(self, isolate_tasks_file):
        tasks = [
            {"id": 1, "title": "Task A", "done": False},
            {"id": 2, "title": "Task B", "done": True},
        ]
        write_tasks(tasks, isolate_tasks_file)
        assert kafi.load_tasks() == tasks

    # Known gap: corrupted JSON raises an unhandled JSONDecodeError.
    # This test documents the current behaviour so we know when it is fixed.
    def test_corrupted_json_raises(self, isolate_tasks_file):
        isolate_tasks_file.write_text("not valid json{{")
        with pytest.raises(json.JSONDecodeError):
            kafi.load_tasks()


# ---------------------------------------------------------------------------
# save_tasks
# ---------------------------------------------------------------------------

class TestSaveTasks:
    def test_creates_file_with_correct_json(self, isolate_tasks_file):
        tasks = [{"id": 1, "title": "Write tests", "done": False}]
        kafi.save_tasks(tasks)
        assert json.loads(isolate_tasks_file.read_text()) == tasks

    def test_overwrites_existing_file(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "Old", "done": False}], isolate_tasks_file)
        new_tasks = [{"id": 1, "title": "New", "done": True}]
        kafi.save_tasks(new_tasks)
        assert json.loads(isolate_tasks_file.read_text()) == new_tasks

    def test_saves_empty_list(self, isolate_tasks_file):
        kafi.save_tasks([])
        assert json.loads(isolate_tasks_file.read_text()) == []


# ---------------------------------------------------------------------------
# add_task
# ---------------------------------------------------------------------------

class TestAddTask:
    def test_adds_task_with_correct_structure(self, isolate_tasks_file):
        kafi.add_task("Buy groceries")
        tasks = kafi.load_tasks()
        assert len(tasks) == 1
        assert tasks[0] == {"id": 1, "title": "Buy groceries", "done": False}

    def test_auto_increments_id(self, isolate_tasks_file):
        kafi.add_task("First")
        kafi.add_task("Second")
        tasks = kafi.load_tasks()
        assert tasks[0]["id"] == 1
        assert tasks[1]["id"] == 2

    def test_prints_confirmation(self, isolate_tasks_file, capsys):
        kafi.add_task("Deploy app")
        captured = capsys.readouterr()
        assert "Added" in captured.out
        assert "Deploy app" in captured.out

    def test_multi_word_title_preserved(self, isolate_tasks_file):
        kafi.add_task("Fix the login bug on prod")
        assert kafi.load_tasks()[0]["title"] == "Fix the login bug on prod"

    # Known gap: empty titles are accepted without validation.
    def test_empty_title_is_accepted(self, isolate_tasks_file):
        kafi.add_task("")
        tasks = kafi.load_tasks()
        assert tasks[0]["title"] == ""

    # Known gap: after deleting task 1, the next add_task produces id=1 again
    # (id = len(tasks) + 1).  This test documents the ID collision behaviour.
    def test_id_collision_after_delete(self, isolate_tasks_file):
        kafi.add_task("First")   # id=1
        kafi.add_task("Second")  # id=2
        kafi.delete_task(1)      # removes id=1; list now has one item
        kafi.add_task("Third")   # id = len([{id:2}]) + 1 = 2  ← collision!
        ids = [t["id"] for t in kafi.load_tasks()]
        # Both remaining tasks have id=2, documenting the collision.
        assert ids.count(2) == 2


# ---------------------------------------------------------------------------
# list_tasks
# ---------------------------------------------------------------------------

class TestListTasks:
    def test_prints_empty_message_when_no_tasks(self, capsys):
        kafi.list_tasks()
        assert "No tasks" in capsys.readouterr().out

    def test_prints_undone_task_with_space(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "Read book", "done": False}], isolate_tasks_file)
        kafi.list_tasks()
        assert "[ ]" in capsys.readouterr().out

    def test_prints_done_task_with_x(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "Read book", "done": True}], isolate_tasks_file)
        kafi.list_tasks()
        assert "[x]" in capsys.readouterr().out

    def test_prints_task_id_and_title(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 42, "title": "Refactor auth", "done": False}], isolate_tasks_file)
        kafi.list_tasks()
        output = capsys.readouterr().out
        assert "42" in output
        assert "Refactor auth" in output

    def test_prints_all_tasks(self, isolate_tasks_file, capsys):
        tasks = [
            {"id": 1, "title": "Alpha", "done": False},
            {"id": 2, "title": "Beta", "done": True},
        ]
        write_tasks(tasks, isolate_tasks_file)
        kafi.list_tasks()
        output = capsys.readouterr().out
        assert "Alpha" in output
        assert "Beta" in output


# ---------------------------------------------------------------------------
# complete_task
# ---------------------------------------------------------------------------

class TestCompleteTask:
    def test_marks_task_done(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "Ship feature", "done": False}], isolate_tasks_file)
        kafi.complete_task(1)
        assert kafi.load_tasks()[0]["done"] is True

    def test_persists_change_to_file(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "Ship feature", "done": False}], isolate_tasks_file)
        kafi.complete_task(1)
        # Reload from disk to confirm persistence
        stored = json.loads(isolate_tasks_file.read_text())
        assert stored[0]["done"] is True

    def test_prints_done_confirmation(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "Ship feature", "done": False}], isolate_tasks_file)
        kafi.complete_task(1)
        assert "Done" in capsys.readouterr().out

    def test_unknown_id_prints_error(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "Exist", "done": False}], isolate_tasks_file)
        kafi.complete_task(99)
        assert "No task" in capsys.readouterr().out

    def test_unknown_id_does_not_modify_file(self, isolate_tasks_file):
        tasks = [{"id": 1, "title": "Exist", "done": False}]
        write_tasks(tasks, isolate_tasks_file)
        kafi.complete_task(99)
        assert kafi.load_tasks() == tasks

    def test_only_target_task_marked_done(self, isolate_tasks_file):
        tasks = [
            {"id": 1, "title": "A", "done": False},
            {"id": 2, "title": "B", "done": False},
        ]
        write_tasks(tasks, isolate_tasks_file)
        kafi.complete_task(1)
        stored = kafi.load_tasks()
        assert stored[0]["done"] is True
        assert stored[1]["done"] is False


# ---------------------------------------------------------------------------
# delete_task
# ---------------------------------------------------------------------------

class TestDeleteTask:
    def test_removes_task_from_list(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "To delete", "done": False}], isolate_tasks_file)
        kafi.delete_task(1)
        assert kafi.load_tasks() == []

    def test_persists_deletion_to_file(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "To delete", "done": False}], isolate_tasks_file)
        kafi.delete_task(1)
        assert json.loads(isolate_tasks_file.read_text()) == []

    def test_prints_deleted_confirmation(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "To delete", "done": False}], isolate_tasks_file)
        kafi.delete_task(1)
        assert "Deleted" in capsys.readouterr().out

    def test_unknown_id_prints_error(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "Stay", "done": False}], isolate_tasks_file)
        kafi.delete_task(99)
        assert "No task" in capsys.readouterr().out

    def test_unknown_id_does_not_modify_list(self, isolate_tasks_file):
        tasks = [{"id": 1, "title": "Stay", "done": False}]
        write_tasks(tasks, isolate_tasks_file)
        kafi.delete_task(99)
        assert kafi.load_tasks() == tasks

    def test_only_target_task_removed(self, isolate_tasks_file):
        tasks = [
            {"id": 1, "title": "Remove me", "done": False},
            {"id": 2, "title": "Keep me", "done": False},
        ]
        write_tasks(tasks, isolate_tasks_file)
        kafi.delete_task(1)
        remaining = kafi.load_tasks()
        assert len(remaining) == 1
        assert remaining[0]["id"] == 2


# ---------------------------------------------------------------------------
# main() — CLI dispatch
# ---------------------------------------------------------------------------

class TestMain:
    def _run(self, *args):
        with patch.object(sys, "argv", ["kafi.py", *args]):
            kafi.main()

    def test_no_args_prints_usage(self, capsys):
        self._run()
        assert "Usage" in capsys.readouterr().out

    def test_unknown_command_prints_usage(self, capsys):
        self._run("unknown")
        assert "Usage" in capsys.readouterr().out

    def test_add_command_adds_task(self, isolate_tasks_file):
        self._run("add", "Write docs")
        assert kafi.load_tasks()[0]["title"] == "Write docs"

    def test_add_command_joins_multiword_title(self, isolate_tasks_file):
        self._run("add", "Fix", "the", "bug")
        assert kafi.load_tasks()[0]["title"] == "Fix the bug"

    def test_add_without_title_prints_usage(self, capsys):
        self._run("add")
        assert "Usage" in capsys.readouterr().out

    def test_list_command_calls_list_tasks(self, isolate_tasks_file, capsys):
        write_tasks([{"id": 1, "title": "Foo", "done": False}], isolate_tasks_file)
        self._run("list")
        assert "Foo" in capsys.readouterr().out

    def test_done_command_marks_task_complete(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "Foo", "done": False}], isolate_tasks_file)
        self._run("done", "1")
        assert kafi.load_tasks()[0]["done"] is True

    def test_delete_command_removes_task(self, isolate_tasks_file):
        write_tasks([{"id": 1, "title": "Foo", "done": False}], isolate_tasks_file)
        self._run("delete", "1")
        assert kafi.load_tasks() == []

    def test_done_without_id_prints_usage(self, capsys):
        self._run("done")
        assert "Usage" in capsys.readouterr().out

    def test_delete_without_id_prints_usage(self, capsys):
        self._run("delete")
        assert "Usage" in capsys.readouterr().out

    # Known gap: passing a non-integer id raises an unhandled ValueError.
    def test_done_with_non_integer_id_raises(self):
        with pytest.raises(ValueError):
            self._run("done", "abc")

    def test_delete_with_non_integer_id_raises(self):
        with pytest.raises(ValueError):
            self._run("delete", "abc")
