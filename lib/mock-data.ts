// Mock data for CreatorConnect platform

export type VerificationLevel = "basic" | "social" | "id" | "premium";

export interface Influencer {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  verificationLevel: VerificationLevel;
  niches: string[];
  location: string;
  languages: string[];
  followers: number;
  engagementRate: number;
  averageRating: number;
  totalCollaborations: number;
  qualityScore: number;
  pricing: {
    post: { min: number; max: number };
    reel: { min: number; max: number };
    story: { min: number; max: number };
  };
  platforms: {
    instagram?: { followers: number; engagementRate: number };
    youtube?: { subscribers: number; views: number };
    twitter?: { followers: number; engagementRate: number };
  };
  badges: string[];
  responseTime: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  verified: boolean;
  totalCampaigns: number;
  averageRating: number;
}

export interface Proposal {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  description: string;
  budget: { min: number; max: number };
  deliverables: string[];
  deadline: string;
  status: "open" | "in-progress" | "completed" | "cancelled";
  applicants: number;
  createdAt: string;
}

export interface Collaboration {
  id: string;
  influencerId: string;
  brandId: string;
  brandName: string;
  title: string;
  status: "pending" | "active" | "content-review" | "completed" | "disputed";
  amount: number;
  deliverables: string[];
  startDate: string;
  endDate: string;
}

export const verificationLevels = {
  basic: {
    label: "Email Verified",
    color: "badge-basic",
    requirements: ["Email confirmation"],
  },
  social: {
    label: "Social Verified",
    color: "badge-social",
    requirements: ["Instagram/YouTube connection", "Unique code posted on social media"],
  },
  id: {
    label: "ID Verified",
    color: "badge-id",
    requirements: ["Government ID (Aadhaar/PAN)", "DigiLocker verification"],
  },
  premium: {
    label: "Premium Verified",
    color: "badge-premium",
    requirements: ["Background check", "Manual review completed"],
  },
};

export const niches = [
  "Fashion",
  "Beauty",
  "Fitness",
  "Food",
  "Travel",
  "Tech",
  "Gaming",
  "Finance",
  "Education",
  "Comedy",
];

export const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Bengali",
  "Marathi",
  "Hinglish",
  "Tanglish",
];

export const mockInfluencers: Influencer[] = [
  {
    id: "1",
    name: "Priya Sharma",
    username: "@priyasharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "Fashion & Lifestyle creator sharing daily inspiration",
    verificationLevel: "premium",
    niches: ["Fashion", "Beauty"],
    location: "Mumbai",
    languages: ["English", "Hindi", "Hinglish"],
    followers: 520000,
    engagementRate: 4.8,
    averageRating: 4.9,
    totalCollaborations: 48,
    qualityScore: 9.2,
    pricing: {
      post: { min: 15000, max: 25000 },
      reel: { min: 25000, max: 40000 },
      story: { min: 5000, max: 8000 },
    },
    platforms: {
      instagram: { followers: 520000, engagementRate: 4.8 },
      youtube: { subscribers: 120000, views: 8500000 },
    },
    badges: ["Top Performer", "Fast Responder"],
    responseTime: "< 2 hours",
  },
  {
    id: "2",
    name: "Arjun Reddy",
    username: "@arjuntech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Tech reviewer & gadget enthusiast",
    verificationLevel: "id",
    niches: ["Tech", "Gaming"],
    location: "Bangalore",
    languages: ["English", "Telugu"],
    followers: 380000,
    engagementRate: 5.2,
    averageRating: 4.7,
    totalCollaborations: 32,
    qualityScore: 8.8,
    pricing: {
      post: { min: 12000, max: 20000 },
      reel: { min: 20000, max: 35000 },
      story: { min: 4000, max: 7000 },
    },
    platforms: {
      instagram: { followers: 180000, engagementRate: 3.9 },
      youtube: { subscribers: 380000, views: 15000000 },
    },
    badges: ["Reliable", "Fast Responder"],
    responseTime: "< 4 hours",
  },
  {
    id: "3",
    name: "Sneha Patel",
    username: "@snehafitness",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    bio: "Certified fitness trainer & nutrition coach",
    verificationLevel: "social",
    niches: ["Fitness", "Food"],
    location: "Delhi",
    languages: ["English", "Hindi"],
    followers: 290000,
    engagementRate: 6.1,
    averageRating: 4.8,
    totalCollaborations: 25,
    qualityScore: 8.5,
    pricing: {
      post: { min: 10000, max: 18000 },
      reel: { min: 18000, max: 30000 },
      story: { min: 3500, max: 6000 },
    },
    platforms: {
      instagram: { followers: 290000, engagementRate: 6.1 },
    },
    badges: ["Top Performer"],
    responseTime: "< 6 hours",
  },
  {
    id: "4",
    name: "Rahul Kumar",
    username: "@rahulcomedy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    bio: "Stand-up comedian & content creator",
    verificationLevel: "premium",
    niches: ["Comedy", "Education"],
    location: "Chennai",
    languages: ["English", "Tamil", "Tanglish"],
    followers: 850000,
    engagementRate: 7.3,
    averageRating: 4.9,
    totalCollaborations: 65,
    qualityScore: 9.5,
    pricing: {
      post: { min: 25000, max: 40000 },
      reel: { min: 45000, max: 70000 },
      story: { min: 8000, max: 12000 },
    },
    platforms: {
      instagram: { followers: 450000, engagementRate: 5.8 },
      youtube: { subscribers: 850000, views: 45000000 },
      twitter: { followers: 120000, engagementRate: 3.2 },
    },
    badges: ["Top Performer", "Fast Responder", "Reliable"],
    responseTime: "< 1 hour",
  },
  {
    id: "5",
    name: "Ananya Iyer",
    username: "@ananyatravels",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    bio: "Travel blogger exploring hidden gems of India",
    verificationLevel: "id",
    niches: ["Travel", "Food"],
    location: "Kochi",
    languages: ["English", "Hindi", "Tamil"],
    followers: 420000,
    engagementRate: 5.5,
    averageRating: 4.6,
    totalCollaborations: 38,
    qualityScore: 8.7,
    pricing: {
      post: { min: 14000, max: 22000 },
      reel: { min: 22000, max: 38000 },
      story: { min: 4500, max: 7500 },
    },
    platforms: {
      instagram: { followers: 420000, engagementRate: 5.5 },
      youtube: { subscribers: 95000, views: 5200000 },
    },
    badges: ["Reliable"],
    responseTime: "< 8 hours",
  },
  {
    id: "6",
    name: "Vikram Singh",
    username: "@vikramfinance",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    bio: "Making finance simple for millennials",
    verificationLevel: "basic",
    niches: ["Finance", "Education"],
    location: "Pune",
    languages: ["English", "Hindi", "Marathi"],
    followers: 180000,
    engagementRate: 4.2,
    averageRating: 4.5,
    totalCollaborations: 15,
    qualityScore: 7.8,
    pricing: {
      post: { min: 8000, max: 15000 },
      reel: { min: 15000, max: 25000 },
      story: { min: 3000, max: 5000 },
    },
    platforms: {
      instagram: { followers: 80000, engagementRate: 3.8 },
      youtube: { subscribers: 180000, views: 4800000 },
    },
    badges: [],
    responseTime: "< 12 hours",
  },
];

export const mockBrands: Brand[] = [
  {
    id: "1",
    name: "StyleBox India",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    industry: "Fashion",
    description: "India's leading fashion subscription service",
    verified: true,
    totalCampaigns: 156,
    averageRating: 4.8,
  },
  {
    id: "2",
    name: "FitLife Nutrition",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    industry: "Health & Fitness",
    description: "Premium supplements and nutrition products",
    verified: true,
    totalCampaigns: 89,
    averageRating: 4.6,
  },
  {
    id: "3",
    name: "TechGuru Gadgets",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop",
    industry: "Technology",
    description: "Your one-stop shop for the latest tech",
    verified: true,
    totalCampaigns: 234,
    averageRating: 4.7,
  },
];

export const mockProposals: Proposal[] = [
  {
    id: "1",
    brandId: "1",
    brandName: "StyleBox India",
    title: "Summer Collection Launch Campaign",
    description: "Looking for fashion influencers to showcase our new summer collection through creative reels and posts",
    budget: { min: 20000, max: 50000 },
    deliverables: ["2 Instagram Reels", "3 Stories", "1 Feed Post"],
    deadline: "2026-03-15",
    status: "open",
    applicants: 24,
    createdAt: "2026-02-01",
  },
  {
    id: "2",
    brandId: "2",
    brandName: "FitLife Nutrition",
    title: "Protein Powder Review Campaign",
    description: "Seeking fitness influencers for honest product reviews and workout integration content",
    budget: { min: 15000, max: 35000 },
    deliverables: ["1 YouTube Video", "2 Instagram Posts"],
    deadline: "2026-03-20",
    status: "open",
    applicants: 18,
    createdAt: "2026-02-03",
  },
  {
    id: "3",
    brandId: "3",
    brandName: "TechGuru Gadgets",
    title: "Smartphone Unboxing & Review",
    description: "Tech reviewers needed for detailed smartphone unboxing and feature demonstration",
    budget: { min: 30000, max: 60000 },
    deliverables: ["1 YouTube Review", "1 Instagram Reel", "3 Stories"],
    deadline: "2026-03-10",
    status: "in-progress",
    applicants: 42,
    createdAt: "2026-01-28",
  },
];

export const mockCollaborations: Collaboration[] = [
  {
    id: "1",
    influencerId: "1",
    brandId: "1",
    brandName: "StyleBox India",
    title: "Winter Collection Promotion",
    status: "completed",
    amount: 45000,
    deliverables: ["2 Reels", "5 Stories", "1 Post"],
    startDate: "2026-01-01",
    endDate: "2026-01-20",
  },
  {
    id: "2",
    influencerId: "1",
    brandId: "3",
    brandName: "TechGuru Gadgets",
    title: "Smartwatch Feature Highlight",
    status: "active",
    amount: 35000,
    deliverables: ["1 Reel", "3 Stories"],
    startDate: "2026-02-01",
    endDate: "2026-02-15",
  },
];

export const platformStats = {
  totalInfluencers: 15420,
  totalBrands: 2850,
  totalCollaborations: 48500,
  totalValueTransacted: 125000000,
  averageCompletionRate: 94.5,
  disputeRate: 2.1,
};
