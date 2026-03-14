"""Kafi — a minimal CLI task tracker."""

import json
import sys
from pathlib import Path

TASKS_FILE = Path.home() / ".kafi_tasks.json"


def load_tasks() -> list[dict]:
    if not TASKS_FILE.exists():
        return []
    with TASKS_FILE.open() as f:
        return json.load(f)


def save_tasks(tasks: list[dict]) -> None:
    with TASKS_FILE.open("w") as f:
        json.dump(tasks, f, indent=2)


def add_task(title: str) -> None:
    tasks = load_tasks()
    task = {"id": len(tasks) + 1, "title": title, "done": False}
    tasks.append(task)
    save_tasks(tasks)
    print(f"Added: [{task['id']}] {title}")


def list_tasks() -> None:
    tasks = load_tasks()
    if not tasks:
        print("No tasks yet. Add one with: python kafi.py add <task>")
        return
    for task in tasks:
        status = "x" if task["done"] else " "
        print(f"  [{status}] {task['id']}. {task['title']}")


def complete_task(task_id: int) -> None:
    tasks = load_tasks()
    for task in tasks:
        if task["id"] == task_id:
            task["done"] = True
            save_tasks(tasks)
            print(f"Done: {task['title']}")
            return
    print(f"No task with id {task_id}")


# TODO: implement delete_task to remove a task by id from the list
def delete_task(task_id: int) -> None:
    tasks = load_tasks()
    remaining = [t for t in tasks if t["id"] != task_id]
    if len(remaining) == len(tasks):
        print(f"No task with id {task_id}")
        return
    save_tasks(remaining)
    print(f"Deleted task {task_id}")


USAGE = """\
Usage:
  python kafi.py add <task title>   Add a new task
  python kafi.py list               List all tasks
  python kafi.py done <id>          Mark a task as complete
  python kafi.py delete <id>        Delete a task
"""


def main() -> None:
    args = sys.argv[1:]
    if not args:
        print(USAGE)
        return

    command = args[0]
    if command == "add" and len(args) >= 2:
        add_task(" ".join(args[1:]))
    elif command == "list":
        list_tasks()
    elif command == "done" and len(args) == 2:
        complete_task(int(args[1]))
    elif command == "delete" and len(args) == 2:
        delete_task(int(args[1]))
    else:
        print(USAGE)


if __name__ == "__main__":
    main()
