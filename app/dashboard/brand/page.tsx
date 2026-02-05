"use client";

import {
  Search,
  FileText,
  Users,
  TrendingUp,
  IndianRupee,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { VerificationBadge } from "@/components/dashboard/verification-badge";
import { Button } from "@/components/ui/button";
import { mockInfluencers, mockProposals, mockBrands } from "@/lib/mock-data";
import Link from "next/link";

const currentBrand = mockBrands[0];

export default function BrandDashboard() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Dashboard"
        subtitle={`Welcome back, ${currentBrand.name}!`}
      />

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/dashboard/brand/discover">
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                  <Search className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    Discover Creators
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Find verified influencers for your next campaign
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Link>
          <Link href="/dashboard/brand/proposals">
            <div className="p-6 rounded-xl bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                  <FileText className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    Create Proposal
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Post a campaign brief and receive applications
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Active Campaigns"
            value="3"
            icon={FileText}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
          <StatsCard
            title="Total Applications"
            value="84"
            change={25}
            icon={Users}
            iconColor="text-accent"
            iconBg="bg-accent/10"
          />
          <StatsCard
            title="Collaborations"
            value={currentBrand.totalCampaigns}
            change={12}
            icon={TrendingUp}
            iconColor="text-success"
            iconBg="bg-success/10"
          />
          <StatsCard
            title="Total Spent"
            value="₹12.5L"
            icon={IndianRupee}
            iconColor="text-warning"
            iconBg="bg-warning/10"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Proposals */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Active Proposals
              </h3>
              <Link href="/dashboard/brand/proposals">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockProposals.map((proposal) => (
                <div
                  key={proposal.id}
                  className="p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground">
                      {proposal.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        proposal.status === "open"
                          ? "bg-success/20 text-success"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {proposal.applicants} applicants
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: {proposal.deadline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Creators */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Recommended Creators
              </h3>
              <Link href="/dashboard/brand/discover">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockInfluencers.slice(0, 4).map((influencer) => (
                <div
                  key={influencer.id}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <img
                    src={influencer.avatar || "/placeholder.svg"}
                    alt={influencer.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground truncate">
                        {influencer.name}
                      </p>
                      <VerificationBadge
                        level={influencer.verificationLevel}
                        showLabel={false}
                        size="sm"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {influencer.niches.join(", ")} • {(influencer.followers / 1000).toFixed(0)}K followers
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {influencer.qualityScore.toFixed(1)}
                    </p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-medium">Priya Sharma</span> applied to your Summer Collection campaign
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-medium">Arjun Reddy</span> submitted content for review
                </p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30">
              <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
                <IndianRupee className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  Payment of <span className="font-medium">₹35,000</span> released to Sneha Patel
                </p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
