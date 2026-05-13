import type { Agent, Article } from "./types";

export const AGENTS: Agent[] = [
  {
    id: "a1",
    slug: "maria-alvarez-austin-tx",
    name: "Maria Alvarez",
    title: "Independent Life Insurance Broker",
    agency: "Alvarez Family Financial",
    photo: "/avatars/agent-1.svg",
    city: "Austin",
    state: "TX",
    zip: "78704",
    yearsExperience: 12,
    licensedStates: ["TX", "OK", "NM", "LA", "AR"],
    languages: ["English", "Spanish"],
    policyTypes: ["Term", "Whole", "No-Exam", "Mortgage Protection"],
    specialties: ["Young Families", "Business Owners"],
    carriers: ["Banner Life", "Pacific Life", "Protective", "Mutual of Omaha"],
    rating: 4.9,
    reviewCount: 142,
    bio: "I help families and small business owners across Texas find the right life insurance — without the pressure. As an independent broker, I shop 20+ carriers so you don't have to.",
    responseTime: "Usually replies in under 1 hour",
    startingMonthlyPremium: 18,
    badges: ["Verified", "Top Rated", "Independent"],
    reviews: [
      {
        id: "r1",
        author: "James K.",
        city: "Round Rock",
        state: "TX",
        rating: 5,
        date: "2026-03-14",
        body: "Maria saved us almost $400/year on a 20-year term policy. She walked us through three options and never pushed the most expensive one.",
      },
      {
        id: "r2",
        author: "Priya S.",
        city: "Austin",
        state: "TX",
        rating: 5,
        date: "2026-02-02",
        body: "First time buying life insurance. Maria was patient and explained term vs. whole life like a real human, not a salesperson.",
      },
      {
        id: "r3",
        author: "Diego R.",
        city: "San Antonio",
        state: "TX",
        rating: 4,
        date: "2025-12-22",
        body: "Quick turnaround, fair pricing. Took a week to finalize underwriting but Maria kept me updated.",
      },
    ],
  },
  {
    id: "a2",
    slug: "jordan-okafor-atlanta-ga",
    name: "Jordan Okafor",
    title: "Senior Life Insurance Advisor",
    agency: "Northstar Brokerage",
    photo: "/avatars/agent-2.svg",
    city: "Atlanta",
    state: "GA",
    zip: "30303",
    yearsExperience: 8,
    licensedStates: ["GA", "FL", "AL", "SC", "NC", "TN"],
    languages: ["English"],
    policyTypes: ["Term", "Universal", "No-Exam"],
    specialties: ["High Net Worth", "Business Owners"],
    carriers: ["Lincoln Financial", "John Hancock", "Prudential", "Symetra"],
    rating: 4.8,
    reviewCount: 96,
    bio: "I specialize in working with professionals and business owners on estate planning and key-person coverage. Fiduciary mindset, no-nonsense recommendations.",
    responseTime: "Usually replies in 2-3 hours",
    startingMonthlyPremium: 22,
    badges: ["Verified", "Independent"],
    reviews: [
      {
        id: "r1",
        author: "Erica M.",
        city: "Atlanta",
        state: "GA",
        rating: 5,
        date: "2026-04-01",
        body: "Jordan structured a buy-sell agreement policy for my partner and me. Smooth process, great communicator.",
      },
      {
        id: "r2",
        author: "Tomas L.",
        city: "Savannah",
        state: "GA",
        rating: 5,
        date: "2026-01-18",
        body: "Very knowledgeable on IUL policies. Helped me understand the tradeoffs without the usual sales spin.",
      },
    ],
  },
  {
    id: "a3",
    slug: "linda-chen-san-francisco-ca",
    name: "Linda Chen",
    title: "Life Insurance Specialist",
    agency: "Bay Coverage Group",
    photo: "/avatars/agent-3.svg",
    city: "San Francisco",
    state: "CA",
    zip: "94110",
    yearsExperience: 15,
    licensedStates: ["CA", "OR", "WA", "NV", "AZ"],
    languages: ["English", "Mandarin", "Cantonese"],
    policyTypes: ["Term", "Whole", "Final Expense"],
    specialties: ["Seniors 60+", "Young Families"],
    carriers: ["MassMutual", "Guardian", "New York Life", "Mutual of Omaha"],
    rating: 5.0,
    reviewCount: 211,
    bio: "After 15 years in the industry, I've learned that the best policy is the one your family actually understands. I take time to explain everything in plain English (or Mandarin).",
    responseTime: "Usually replies within 30 minutes",
    startingMonthlyPremium: 20,
    badges: ["Verified", "Top Rated", "Independent"],
    reviews: [
      {
        id: "r1",
        author: "Wei Z.",
        city: "Oakland",
        state: "CA",
        rating: 5,
        date: "2026-04-22",
        body: "Linda helped my parents get final expense coverage with no medical exam. So grateful — they speak limited English and she made everything clear.",
      },
      {
        id: "r2",
        author: "Sarah B.",
        city: "San Francisco",
        state: "CA",
        rating: 5,
        date: "2026-03-08",
        body: "Linda is patient, thorough, and never made me feel rushed. Got a 30-year term policy at a great rate.",
      },
    ],
  },
  {
    id: "a4",
    slug: "marcus-bell-chicago-il",
    name: "Marcus Bell",
    title: "Life & Final Expense Agent",
    agency: "Midwest Family Insurance",
    photo: "/avatars/agent-4.svg",
    city: "Chicago",
    state: "IL",
    zip: "60616",
    yearsExperience: 6,
    licensedStates: ["IL", "IN", "WI", "MI", "MO"],
    languages: ["English"],
    policyTypes: ["Final Expense", "No-Exam", "Term"],
    specialties: ["Seniors 60+", "Diabetics", "Veterans"],
    carriers: ["AIG", "Mutual of Omaha", "Gerber Life", "Aetna"],
    rating: 4.7,
    reviewCount: 58,
    bio: "Veteran-owned. I focus on guaranteed-issue and simplified-issue policies for seniors and folks with health conditions who've been turned down elsewhere.",
    responseTime: "Usually replies in under 2 hours",
    startingMonthlyPremium: 28,
    badges: ["Verified", "Independent"],
    reviews: [
      {
        id: "r1",
        author: "Doris W.",
        city: "Chicago",
        state: "IL",
        rating: 5,
        date: "2026-02-19",
        body: "I was declined by two other companies because of my diabetes. Marcus found me a policy in a week.",
      },
    ],
  },
  {
    id: "a5",
    slug: "rebecca-foster-denver-co",
    name: "Rebecca Foster",
    title: "Independent Insurance Broker",
    agency: "Foster & Co. Insurance",
    photo: "/avatars/agent-5.svg",
    city: "Denver",
    state: "CO",
    zip: "80205",
    yearsExperience: 10,
    licensedStates: ["CO", "UT", "WY", "NM", "KS"],
    languages: ["English"],
    policyTypes: ["Term", "Whole", "Universal", "Mortgage Protection"],
    specialties: ["Young Families", "High Net Worth"],
    carriers: ["Pacific Life", "Banner Life", "Lincoln Financial", "Protective"],
    rating: 4.9,
    reviewCount: 124,
    bio: "I work with new parents and homeowners across the Mountain West. My promise: I'll explain what you're buying in 10 minutes or less.",
    responseTime: "Usually replies in 1-2 hours",
    startingMonthlyPremium: 17,
    badges: ["Verified", "Top Rated", "Independent"],
    reviews: [
      {
        id: "r1",
        author: "Kyle T.",
        city: "Denver",
        state: "CO",
        rating: 5,
        date: "2026-04-30",
        body: "We just had our second kid and Rebecca made buying coverage simple. Locked in a 30-year term at a rate I'm happy with.",
      },
      {
        id: "r2",
        author: "Anna P.",
        city: "Boulder",
        state: "CO",
        rating: 5,
        date: "2026-03-12",
        body: "Rebecca is sharp, honest, and fast. Hard to find that combo.",
      },
    ],
  },
  {
    id: "a6",
    slug: "samir-patel-new-york-ny",
    name: "Samir Patel",
    title: "Estate & Life Planning Advisor",
    agency: "Patel Wealth Protection",
    photo: "/avatars/agent-6.svg",
    city: "New York",
    state: "NY",
    zip: "10001",
    yearsExperience: 18,
    licensedStates: ["NY", "NJ", "CT", "PA", "MA"],
    languages: ["English", "Hindi", "Gujarati"],
    policyTypes: ["Whole", "Universal", "Term"],
    specialties: ["High Net Worth", "Business Owners"],
    carriers: ["New York Life", "Northwestern Mutual", "MassMutual", "Guardian"],
    rating: 4.9,
    reviewCount: 187,
    bio: "I help families build generational wealth through permanent life insurance and estate planning strategies. Securities licensed (Series 7, 66).",
    responseTime: "Usually replies same business day",
    startingMonthlyPremium: 45,
    badges: ["Verified", "Top Rated", "Independent"],
    reviews: [
      {
        id: "r1",
        author: "Robert H.",
        city: "Greenwich",
        state: "CT",
        rating: 5,
        date: "2026-04-15",
        body: "Samir designed an ILIT-funded policy that fit perfectly into our estate plan. Top tier advisor.",
      },
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "term-vs-whole-life-insurance",
    title: "Term vs. Whole Life Insurance: Which is right for you?",
    excerpt:
      "A plain-English breakdown of the two most common types of life insurance, with pros, cons, and who each is best for.",
    readMinutes: 6,
    category: "Basics",
    body: [
      "Term life insurance covers you for a fixed period — typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries get a tax-free payout. If you outlive the term, the policy ends. Term is the cheapest way to get a lot of coverage, which is why it's the go-to choice for parents and homeowners.",
      "Whole life insurance covers you for life and builds cash value over time. Premiums are 5-15x more expensive than term, but the policy never expires and the cash value grows tax-deferred. Whole life makes the most sense for estate planning, special-needs dependents, or those who've maxed out other tax-advantaged accounts.",
      "Rule of thumb: if you need coverage to replace income while your kids are young or your mortgage is being paid off, buy term. If you need lifelong coverage or a tax-advantaged savings vehicle, consider whole or universal life.",
    ],
  },
  {
    slug: "how-much-life-insurance-do-i-need",
    title: "How much life insurance do I actually need?",
    excerpt:
      "Three simple methods to calculate the right coverage amount — without overpaying for coverage you don't need.",
    readMinutes: 4,
    category: "Buying Guide",
    body: [
      "The simplest method is 10-12x your annual income. If you earn $80,000/year, aim for $800k-$960k of coverage. It's quick but doesn't account for debts or specific obligations.",
      "The DIME method is more precise: add up your Debt, Income replacement (years × salary), Mortgage balance, and Education costs for your kids. The total is your target coverage.",
      "The needs-based method is the most accurate but takes more work — sit down with an agent and project actual cash flow your family would need year by year. Most people land somewhere between $500k and $2M.",
    ],
  },
  {
    slug: "no-medical-exam-life-insurance",
    title: "Can I get life insurance with no medical exam?",
    excerpt:
      "Yes — and it's faster than you think. Here's how no-exam policies work and what you'll pay for the convenience.",
    readMinutes: 5,
    category: "Health",
    body: [
      "No-exam life insurance skips the in-person paramedical exam and blood draw. Instead, insurers rely on prescription history, MIB records, and driving records to underwrite your policy.",
      "Pros: approval in days instead of weeks, no needles, no waiting. Cons: you'll typically pay 10-30% more than a fully underwritten policy, and coverage amounts are usually capped at $1M-$3M.",
      "Best for: healthy buyers under 50 who want speed, or buyers with mild health conditions who'd rather not deal with traditional underwriting.",
    ],
  },
  {
    slug: "life-insurance-for-diabetics",
    title: "Life insurance for diabetics: what to expect",
    excerpt:
      "Diabetes doesn't disqualify you. Here's how Type 1 and Type 2 affect underwriting and how to find the best rates.",
    readMinutes: 7,
    category: "Health",
    body: [
      "Most major carriers will write a policy for someone with controlled diabetes. The key factors are: age of diagnosis, A1C level, whether you're insulin-dependent, and any complications like neuropathy or retinopathy.",
      "Type 2 diabetics with an A1C under 7.5, diagnosed after age 40, and no complications often qualify for Standard rates with carriers like Banner Life, Prudential, and Mutual of Omaha.",
      "Type 1 diabetics typically pay more but are still insurable. Working with an independent broker matters here — different carriers have very different appetites for diabetic applicants.",
    ],
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return AGENTS.find((a) => a.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function filterAgents(opts: {
  query?: string;
  state?: string;
  policyType?: string;
  specialty?: string;
  language?: string;
  sort?: "rating" | "experience" | "price";
}) {
  let results = [...AGENTS];
  if (opts.query) {
    const q = opts.query.toLowerCase();
    results = results.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q) ||
        a.zip.startsWith(q) ||
        a.agency.toLowerCase().includes(q),
    );
  }
  if (opts.state) {
    results = results.filter((a) => a.licensedStates.includes(opts.state!));
  }
  if (opts.policyType) {
    results = results.filter((a) =>
      a.policyTypes.includes(opts.policyType as Agent["policyTypes"][number]),
    );
  }
  if (opts.specialty) {
    results = results.filter((a) =>
      a.specialties.includes(opts.specialty as Agent["specialties"][number]),
    );
  }
  if (opts.language) {
    results = results.filter((a) => a.languages.includes(opts.language!));
  }
  switch (opts.sort) {
    case "experience":
      results.sort((a, b) => b.yearsExperience - a.yearsExperience);
      break;
    case "price":
      results.sort((a, b) => a.startingMonthlyPremium - b.startingMonthlyPremium);
      break;
    default:
      results.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
  }
  return results;
}

export const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

export const POLICY_TYPES = [
  "Term",
  "Whole",
  "Universal",
  "Final Expense",
  "No-Exam",
  "Mortgage Protection",
];

export const SPECIALTIES = [
  "Young Families",
  "Seniors 60+",
  "High Net Worth",
  "Business Owners",
  "Diabetics",
  "Smokers",
  "Veterans",
];

export const LANGUAGES = [
  "English",
  "Spanish",
  "Mandarin",
  "Cantonese",
  "Hindi",
  "Gujarati",
];
