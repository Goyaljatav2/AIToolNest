import { Tool, BlogPost } from '@/types/tool';

export const categories = [
  { name: "AI Writing", slug: "ai-writing", icon: "✍️", count: 42 },
  { name: "AI Image Generation", slug: "ai-image-generation", icon: "🎨", count: 35 },
  { name: "AI Coding", slug: "ai-coding", icon: "💻", count: 28 },
  { name: "AI Study Tools", slug: "ai-study-tools", icon: "📚", count: 19 },
  { name: "AI Productivity", slug: "ai-productivity", icon: "⚡", count: 50 },
  { name: "Marketing AI", slug: "marketing-ai", icon: "📈", count: 31 },
  { name: "Business AI", slug: "business-ai", icon: "💼", count: 24 },
  { name: "Design AI", slug: "design-ai", icon: "🎭", count: 22 },
];

export const toolsData: Tool[] = [
  {
    id: "1",
    name: "ChatGPT",
    slug: "chatgpt",
    description: "Advanced conversational AI model by OpenAI for text generation, coding help, analysis, and problem-solving.",
    category: "AI Writing",
    logo: "/logos/chatgpt.png",
    officialUrl: "https://chat.openai.com",
    affiliateUrl: "",
    pricing: "Freemium",
    pricingInfo: "Free tier available; Plus plan is $20/month",
    hasFreePlan: true,
    features: ["Natural language processing", "Code generation", "Custom GPTs", "Data analysis"],
    pros: ["Highly versatile", "Extensive plugin & GPT ecosystem", "Fast response times"],
    cons: ["Can occasionally hallucinate facts", "Server loads can cause limits on free tier"],
    bestFor: ["Writers", "Programmers", "Students", "Marketers"],
    platforms: ["Web", "iOS", "Android", "Desktop App"],
    integrations: ["Various APIs", "Microsoft ecosystem via partnerships"],
    faq: [
      { question: "Is ChatGPT free to use?", answer: "Yes, OpenAI offers a robust free tier with access to core models." }
    ],
    lastUpdated: "2026-06-01"
  },
  {
    id: "2",
    name: "Claude",
    slug: "claude",
    description: "Next-generation AI assistant by Anthropic built for complex reasoning, long-form content creation, and secure coding.",
    category: "AI Writing",
    logo: "/logos/claude.png",
    officialUrl: "https://claude.ai",
    pricing: "Freemium",
    pricingInfo: "Free tier available; Pro plan $20/month",
    hasFreePlan: true,
    features: ["Massive context window", "Artifacts workspace", "Advanced code execution", "Document analysis"],
    pros: ["Superior nuance and writing tone", "Exceptional handling of large codebases/documents"],
    cons: ["Message limits on free tier can exhaust quickly during heavy tasks"],
    bestFor: ["Researchers", "Developers", "Content Creators"],
    platforms: ["Web", "Mobile Web"],
    integrations: ["Developer API"],
    faq: [
      { question: "What makes Claude unique?", answer: "Claude features an exceptionally large context window allowing you to upload entire books or code repositories." }
    ],
    lastUpdated: "2026-06-02"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Best AI Productivity Tools to Transform Your Workflow in 2026",
    slug: "best-ai-productivity-tools-2026",
    excerpt: "Discover the top-rated software and AI apps designed to automate tedious tasks, streamline communication, and boost daily output.",
    content: "Full markdown or HTML content goes here...",
    category: "Productivity",
    author: {
      name: "AIToolNest Editorial",
      avatar: "/authors/editor.png"
    },
    publishedDate: "2026-06-01",
    updatedDate: "2026-06-01",
    featuredImage: "/blog/productivity-ai.jpg"
  }
];
