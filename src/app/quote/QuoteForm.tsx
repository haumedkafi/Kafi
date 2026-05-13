"use client";

import { useState } from "react";
import Link from "next/link";
import {
  POLICY_TYPES,
  US_STATES,
  getAgentBySlug,
} from "@/lib/data";

const STEPS = ["About you", "Coverage", "Health", "Contact"] as const;

type FormState = {
  age: string;
  gender: string;
  state: string;
  zip: string;
  policyType: string;
  coverage: string;
  term: string;
  tobacco: string;
  health: string;
  name: string;
  email: string;
  phone: string;
};

const INITIAL: FormState = {
  age: "",
  gender: "",
  state: "",
  zip: "",
  policyType: "Term",
  coverage: "500000",
  term: "20",
  tobacco: "no",
  health: "good",
  name: "",
  email: "",
  phone: "",
};

export function QuoteForm({ presetAgent }: { presetAgent?: string }) {
  const agent = presetAgent ? getAgentBySlug(presetAgent) : undefined;
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function next() {
    if (step < STEPS.length - 1) setStep(step + 1);
    else setSubmitted(true);
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold">You're all set, {data.name.split(" ")[0] || "friend"}!</h2>
        <p className="mt-2 text-ink-500">
          We'll match you with{" "}
          {agent ? (
            <>
              <span className="font-semibold">{agent.name}</span> and 1-2 other
              vetted agents
            </>
          ) : (
            "up to 3 licensed agents"
          )}{" "}
          in {data.state || "your state"} and email you at{" "}
          <span className="font-semibold">{data.email || "your inbox"}</span>{" "}
          within 24 hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/agents" className="btn-secondary">
            Browse more agents
          </Link>
          <Link href="/learn" className="btn-primary">
            Read while you wait
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
      className="card p-6 sm:p-8"
    >
      {agent && (
        <div className="-mt-2 mb-6 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800">
          You're requesting a quote from{" "}
          <span className="font-semibold">{agent.name}</span>. We'll also match
          you with 1-2 other agents for comparison.
        </div>
      )}

      <Progress step={step} />

      <div className="mt-6">
        {step === 0 && (
          <Fieldset legend="Tell us about you">
            <Row>
              <Field label="Your age">
                <input
                  required
                  type="number"
                  min={18}
                  max={85}
                  value={data.age}
                  onChange={(e) => update("age", e.target.value)}
                  className="input"
                  placeholder="e.g. 35"
                />
              </Field>
              <Field label="Gender">
                <select
                  required
                  value={data.gender}
                  onChange={(e) => update("gender", e.target.value)}
                  className="input"
                >
                  <option value="">Select…</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Prefer not to say</option>
                </select>
              </Field>
            </Row>
            <Row>
              <Field label="State">
                <select
                  required
                  value={data.state}
                  onChange={(e) => update("state", e.target.value)}
                  className="input"
                >
                  <option value="">Select your state</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="ZIP code">
                <input
                  required
                  inputMode="numeric"
                  pattern="\d{5}"
                  maxLength={5}
                  value={data.zip}
                  onChange={(e) => update("zip", e.target.value)}
                  className="input"
                  placeholder="e.g. 78704"
                />
              </Field>
            </Row>
          </Fieldset>
        )}

        {step === 1 && (
          <Fieldset legend="What kind of coverage are you looking for?">
            <Field label="Policy type">
              <div className="grid gap-2 sm:grid-cols-2">
                {POLICY_TYPES.map((p) => (
                  <label
                    key={p}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 text-sm ${
                      data.policyType === p
                        ? "border-brand-500 bg-brand-50"
                        : "border-ink-100 hover:border-ink-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="policyType"
                      value={p}
                      checked={data.policyType === p}
                      onChange={(e) => update("policyType", e.target.value)}
                      className="text-brand-600"
                    />
                    <span className="font-medium">{p}</span>
                  </label>
                ))}
              </div>
            </Field>
            <Row>
              <Field label="Coverage amount">
                <select
                  value={data.coverage}
                  onChange={(e) => update("coverage", e.target.value)}
                  className="input"
                >
                  <option value="100000">$100,000</option>
                  <option value="250000">$250,000</option>
                  <option value="500000">$500,000</option>
                  <option value="750000">$750,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="2000000">$2,000,000</option>
                  <option value="5000000">$5,000,000+</option>
                </select>
              </Field>
              <Field label="Term length (years)">
                <select
                  value={data.term}
                  onChange={(e) => update("term", e.target.value)}
                  className="input"
                  disabled={!["Term", "Mortgage Protection"].includes(data.policyType)}
                >
                  <option value="10">10 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="25">25 years</option>
                  <option value="30">30 years</option>
                </select>
              </Field>
            </Row>
          </Fieldset>
        )}

        {step === 2 && (
          <Fieldset legend="Quick health questions">
            <Field label="Have you used tobacco or nicotine in the last 12 months?">
              <RadioGroup
                name="tobacco"
                value={data.tobacco}
                onChange={(v) => update("tobacco", v)}
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
              />
            </Field>
            <Field label="Overall health">
              <RadioGroup
                name="health"
                value={data.health}
                onChange={(v) => update("health", v)}
                options={[
                  { value: "excellent", label: "Excellent" },
                  { value: "good", label: "Good" },
                  { value: "average", label: "Average" },
                  { value: "managed", label: "Managed condition" },
                ]}
              />
            </Field>
            <Estimate data={data} />
          </Fieldset>
        )}

        {step === 3 && (
          <Fieldset legend="Where should we send your matched agents?">
            <Field label="Full name">
              <input
                required
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className="input"
                placeholder="Jane Smith"
              />
            </Field>
            <Row>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="input"
                  placeholder="(555) 123-4567"
                />
              </Field>
            </Row>
            <p className="text-xs text-ink-400">
              By submitting, you agree to be contacted by your matched agents.
              We never sell your information.
            </p>
          </Fieldset>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        <button type="submit" className="btn-primary px-6">
          {step === STEPS.length - 1 ? "Get my quotes" : "Continue"}
        </button>
      </div>
    </form>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <ol className="grid grid-cols-4 gap-2">
      {STEPS.map((label, i) => (
        <li key={label} className="flex flex-col gap-2">
          <span
            className={`h-1.5 rounded-full ${
              i <= step ? "bg-brand-600" : "bg-ink-100"
            }`}
          />
          <span
            className={`text-xs font-medium ${
              i <= step ? "text-brand-700" : "text-ink-400"
            }`}
          >
            {i + 1}. {label}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Fieldset({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-5">
      <legend className="text-xl font-semibold">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  );
}

function RadioGroup({
  name,
  value,
  onChange,
  options,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((o) => (
        <label
          key={o.value}
          className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 text-sm ${
            value === o.value
              ? "border-brand-500 bg-brand-50"
              : "border-ink-100 hover:border-ink-200"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={o.value}
            checked={value === o.value}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className="font-medium">{o.label}</span>
        </label>
      ))}
    </div>
  );
}

function Estimate({ data }: { data: FormState }) {
  const age = parseInt(data.age) || 35;
  const coverage = parseInt(data.coverage) || 500000;
  const term = parseInt(data.term) || 20;
  const tobaccoFactor = data.tobacco === "yes" ? 2.4 : 1;
  const healthFactor =
    data.health === "excellent" ? 0.8 : data.health === "managed" ? 1.6 : 1.0;
  const base = (coverage / 100000) * (age * 0.18 + term * 0.55);
  const monthly = Math.max(8, Math.round(base * tobaccoFactor * healthFactor));

  return (
    <div className="rounded-lg bg-brand-50 p-4 ring-1 ring-brand-100">
      <p className="text-sm text-brand-800">
        Estimated monthly premium for a $
        {coverage.toLocaleString()} {data.policyType.toLowerCase()} policy:
      </p>
      <p className="mt-1 text-3xl font-bold text-brand-900">
        ~${monthly}<span className="text-base font-medium">/mo</span>
      </p>
      <p className="mt-1 text-xs text-brand-700">
        Estimate only. Your matched agents will share final quotes.
      </p>
    </div>
  );
}
