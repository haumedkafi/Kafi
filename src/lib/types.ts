export type PolicyType =
  | "Term"
  | "Whole"
  | "Universal"
  | "Final Expense"
  | "No-Exam"
  | "Mortgage Protection";

export type Specialty =
  | "High Net Worth"
  | "Seniors 60+"
  | "Young Families"
  | "Diabetics"
  | "Smokers"
  | "Business Owners"
  | "Veterans";

export type Review = {
  id: string;
  author: string;
  city: string;
  state: string;
  rating: number;
  date: string;
  body: string;
};

export type Agent = {
  id: string;
  slug: string;
  name: string;
  title: string;
  agency: string;
  photo: string;
  city: string;
  state: string;
  zip: string;
  yearsExperience: number;
  licensedStates: string[];
  languages: string[];
  policyTypes: PolicyType[];
  specialties: Specialty[];
  carriers: string[];
  rating: number;
  reviewCount: number;
  bio: string;
  responseTime: string;
  startingMonthlyPremium: number;
  badges: ("Verified" | "Top Rated" | "Independent" | "Captive")[];
  reviews: Review[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  category: "Basics" | "Term" | "Whole Life" | "Buying Guide" | "Health";
  body: string[];
};
