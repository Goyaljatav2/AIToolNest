export type PricingType = 'Free' | 'Freemium' | 'Paid';

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  logo: string;
  officialUrl: string;
  affiliateUrl?: string;
  pricing: PricingType;
  pricingInfo: string;
  hasFreePlan: boolean;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  platforms: string[];
  integrations: string[];
  faq: ToolFAQ[];
  isSponsored?: boolean;
  lastUpdated: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedDate: string;
  updatedDate: string;
  featuredImage: string;
}
