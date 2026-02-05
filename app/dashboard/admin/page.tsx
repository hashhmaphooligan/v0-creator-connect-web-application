"use client";

import {
  Users,
  Building2,
  Shield,
  AlertTriangle,
  IndianRupee,
  TrendingUp,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Button } from "@/components/ui/button";
import { platformStats, mockInfluencers } from "@/lib/mock-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock admin data
const pendingVerifications = [
  {
    id: "1",
    name: "Amit Kumar",
    type: "ID Verification",
    submitted: "2 hours ago",
    status: "pending",
  },
  {
    id: "2",
    name: "Neha Gupta",
    type: "Premium Verification",
    submitted: "5 hours ago",
    status: "pending",
  },
  {
    id: "3",
    name: "Ravi Singh",
    type: "Social Verification",
    submitted: "1 day ago",
    status: "pending",
  },
];

const recentDisputes = [
  {
    id: "1",
    title: "Payment not received",
    parties: "Priya Sharma vs StyleBox",
    amount: 25000,
    status: "open",
    priority: "high",
  },
  {
    id: "2",
    title: "Content not as agreed",
    parties: "TechGuru vs Arjun Reddy",
    amount: 35000,
    status: "investigating",
    priority: "medium",
  },
];

const growthData = [
  { month: "Sep", users: 12500, transactions: 1800 },
  { month: "Oct", users: 13200, transactions: 2100 },
  { month: "Nov", users: 14100, transactions: 2400 },
  { month: "Dec", users: 14800, transactions: 2650 },
  { month: "Jan", users: 15200, transactions: 2900 },
  { month: "Feb", users: 15420, transactions: 3100 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Admin Dashboard"
        subtitle="Platform overview and management"
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Total Creators"
            value={platformStats.totalInfluencers.toLocaleString()}
            change={8.2}
            icon={Users}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
          <StatsCard
            title="Total Brands"
            value={platformStats.totalBrands.toLocaleString()}
            change={12.5}
            icon={Building2}
            iconColor="text-accent"
            iconBg="bg-accent/10"
          />
          <StatsCard
            title="Total GMV"
            value={`₹${(platformStats.totalValueTransacted / 10000000).toFixed(1)}Cr`}
            change={18.3}
            icon={IndianRupee}
            iconColor="text-success"
            iconBg="bg-success/10"
          />
          <StatsCard
            title="Dispute Rate"
            value={`${platformStats.disputeRate}%`}
            change={-0.3}
            icon={AlertTriangle}
            iconColor="text-warning"
            iconBg="bg-warning/10"
          />
        </div>

        {/* Growth Chart */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Platform Growth
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  name="Users"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
                <Line
                  type="monotone"
                  dataKey="transactions"
                  name="Transactions"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Transactions</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Verifications */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Pending Verifications
              </h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {pendingVerifications.map((verification) => (
                <div
                  key={verification.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {verification.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {verification.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {verification.submitted}
                    </span>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Disputes */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Active Disputes
              </h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentDisputes.map((dispute) => (
                <div
                  key={dispute.id}
                  className="p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground">
                          {dispute.title}
                        </h4>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            dispute.priority === "high"
                              ? "bg-destructive/20 text-destructive"
                              : "bg-warning/20 text-warning"
                          }`}
                        >
                          {dispute.priority}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {dispute.parties}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dispute.status === "open"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {dispute.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Amount: ₹{dispute.amount.toLocaleString()}
                    </span>
                    <Button size="sm">Investigate</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Stats */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Verification Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-muted-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                <span className="text-sm text-muted-foreground">Basic</span>
              </div>
              <p className="text-2xl font-bold text-foreground">8,450</p>
              <p className="text-xs text-muted-foreground">54.8%</p>
            </div>
            <div className="p-4 rounded-lg bg-success/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Social</span>
              </div>
              <p className="text-2xl font-bold text-foreground">4,120</p>
              <p className="text-xs text-muted-foreground">26.7%</p>
            </div>
            <div className="p-4 rounded-lg bg-chart-4/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-chart-4" />
                <span className="text-sm text-muted-foreground">ID Verified</span>
              </div>
              <p className="text-2xl font-bold text-foreground">2,150</p>
              <p className="text-xs text-muted-foreground">13.9%</p>
            </div>
            <div className="p-4 rounded-lg bg-warning/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-sm text-muted-foreground">Premium</span>
              </div>
              <p className="text-2xl font-bold text-foreground">700</p>
              <p className="text-xs text-muted-foreground">4.5%</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Platform Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-medium">Amit Kumar</span> completed ID verification
                </p>
                <p className="text-xs text-muted-foreground">10 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-medium">FreshMart</span> registered as a new brand
                </p>
                <p className="text-xs text-muted-foreground">25 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                <IndianRupee className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  Collaboration worth <span className="font-medium">₹45,000</span> completed
                </p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  Dispute resolved between <span className="font-medium">Sneha P.</span> and <span className="font-medium">BeautyBox</span>
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
