"use client";

import {
  Users,
  Heart,
  MessageCircle,
  TrendingUp,
  Eye,
  Share2,
  Instagram,
  Youtube,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { mockInfluencers } from "@/lib/mock-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const currentUser = mockInfluencers[0];

// Mock analytics data
const followerGrowth = [
  { month: "Sep", followers: 485000 },
  { month: "Oct", followers: 492000 },
  { month: "Nov", followers: 498000 },
  { month: "Dec", followers: 508000 },
  { month: "Jan", followers: 515000 },
  { month: "Feb", followers: 520000 },
];

const engagementData = [
  { day: "Mon", likes: 12500, comments: 850, shares: 420 },
  { day: "Tue", likes: 15200, comments: 920, shares: 510 },
  { day: "Wed", likes: 13800, comments: 780, shares: 380 },
  { day: "Thu", likes: 18500, comments: 1100, shares: 620 },
  { day: "Fri", likes: 21000, comments: 1350, shares: 750 },
  { day: "Sat", likes: 24500, comments: 1580, shares: 890 },
  { day: "Sun", likes: 22000, comments: 1420, shares: 810 },
];

const audienceAge = [
  { name: "18-24", value: 35, color: "hsl(var(--primary))" },
  { name: "25-34", value: 42, color: "hsl(var(--accent))" },
  { name: "35-44", value: 15, color: "hsl(var(--chart-3))" },
  { name: "45+", value: 8, color: "hsl(var(--chart-4))" },
];

const audienceLocation = [
  { city: "Mumbai", percentage: 28 },
  { city: "Delhi", percentage: 22 },
  { city: "Bangalore", percentage: 18 },
  { city: "Chennai", percentage: 12 },
  { city: "Hyderabad", percentage: 10 },
  { city: "Others", percentage: 10 },
];

export default function InfluencerAnalytics() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Analytics"
        subtitle="Track your performance across platforms"
      />

      <div className="p-6 space-y-6">
        {/* Platform Selector */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
            <Instagram className="w-4 h-4" />
            Instagram
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors">
            <Youtube className="w-4 h-4" />
            YouTube
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Followers"
            value={`${(currentUser.followers / 1000).toFixed(0)}K`}
            change={3.2}
            icon={Users}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
          <StatsCard
            title="Engagement Rate"
            value={`${currentUser.engagementRate}%`}
            change={0.5}
            icon={Heart}
            iconColor="text-destructive"
            iconBg="bg-destructive/10"
          />
          <StatsCard
            title="Avg. Likes"
            value="18.5K"
            change={8.2}
            icon={Heart}
            iconColor="text-accent"
            iconBg="bg-accent/10"
          />
          <StatsCard
            title="Profile Visits"
            value="42.3K"
            change={15.4}
            icon={Eye}
            iconColor="text-warning"
            iconBg="bg-warning/10"
          />
        </div>

        {/* Follower Growth Chart */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Follower Growth (Last 6 Months)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={followerGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                  formatter={(value: number) => [value.toLocaleString(), "Followers"]}
                />
                <Line
                  type="monotone"
                  dataKey="followers"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement & Audience Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Engagement */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Weekly Engagement
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                  />
                  <Bar dataKey="likes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="comments" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="shares" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Likes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Comments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-3" />
                <span className="text-sm text-muted-foreground">Shares</span>
              </div>
            </div>
          </div>

          {/* Audience Demographics */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Audience Age Distribution
            </h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={audienceAge}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {audienceAge.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      color: "hsl(var(--foreground))",
                    }}
                    formatter={(value: number) => [`${value}%`, "Audience"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              {audienceAge.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audience Location */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Top Audience Locations
          </h3>
          <div className="space-y-4">
            {audienceLocation.map((location) => (
              <div key={location.city}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">
                    {location.city}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {location.percentage}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${location.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">+7.2%</p>
                <p className="text-sm text-muted-foreground">30-Day Growth</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              You gained 35,000 new followers in the last 30 days
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">1,247</p>
                <p className="text-sm text-muted-foreground">Avg. Comments</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Your posts receive 23% more comments than similar creators
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Share2 className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8.5</p>
                <p className="text-sm text-muted-foreground">Audience Score</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              High-quality engaged audience with minimal fake followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
