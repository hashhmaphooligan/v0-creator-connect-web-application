"use client";

import {
  Eye,
  FileText,
  IndianRupee,
  Star,
  TrendingUp,
  Users,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { VerificationBadge } from "@/components/dashboard/verification-badge";
import { Button } from "@/components/ui/button";
import { mockInfluencers, mockProposals, mockCollaborations } from "@/lib/mock-data";
import Link from "next/link";

// Get current user (mock - first influencer)
const currentUser = mockInfluencers[0];

export default function InfluencerDashboard() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Dashboard"
        subtitle="Welcome back, Priya!"
      />

      <div className="p-6 space-y-6">
        {/* Profile Summary Card */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-primary/20 via-card to-accent/10 border border-border">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <img
              src={currentUser.avatar || "/placeholder.svg"}
              alt={currentUser.name}
              className="w-20 h-20 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-foreground">
                  {currentUser.name}
                </h2>
                <VerificationBadge level={currentUser.verificationLevel} />
              </div>
              <p className="text-muted-foreground mb-3">{currentUser.bio}</p>
              <div className="flex flex-wrap gap-2">
                {currentUser.niches.map((niche) => (
                  <span
                    key={niche}
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                  >
                    {niche}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/dashboard/influencer/profile">
                <Button className="w-full">Edit Profile</Button>
              </Link>
              <Link href="/dashboard/influencer/analytics">
                <Button variant="outline" className="w-full bg-transparent">
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Profile Views"
            value="2,847"
            change={12.5}
            icon={Eye}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
          <StatsCard
            title="Total Followers"
            value={`${(currentUser.followers / 1000).toFixed(0)}K`}
            change={3.2}
            icon={Users}
            iconColor="text-accent"
            iconBg="bg-accent/10"
          />
          <StatsCard
            title="Quality Score"
            value={currentUser.qualityScore.toFixed(1)}
            change={0.3}
            icon={Star}
            iconColor="text-warning"
            iconBg="bg-warning/10"
          />
          <StatsCard
            title="This Month Earnings"
            value="₹85,000"
            change={18.7}
            icon={IndianRupee}
            iconColor="text-success"
            iconBg="bg-success/10"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Proposals */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Open Proposals
              </h3>
              <Link href="/dashboard/influencer/proposals">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockProposals.slice(0, 3).map((proposal) => (
                <div
                  key={proposal.id}
                  className="p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">
                        {proposal.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {proposal.brandName}
                      </p>
                    </div>
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
                      <IndianRupee className="w-3 h-3" />
                      ₹{proposal.budget.min.toLocaleString()} - ₹{proposal.budget.max.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {proposal.deadline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Collaborations */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                Active Collaborations
              </h3>
              <Link href="/dashboard/influencer/collaborations">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {mockCollaborations.map((collab) => (
                <div
                  key={collab.id}
                  className="p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">
                        {collab.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {collab.brandName}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        collab.status === "completed"
                          ? "bg-success/20 text-success"
                          : collab.status === "active"
                            ? "bg-primary/20 text-primary"
                            : "bg-warning/20 text-warning"
                      }`}
                    >
                      {collab.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      ₹{collab.amount.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {collab.deliverables.length} deliverables
                    </span>
                  </div>
                </div>
              ))}
              {mockCollaborations.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No active collaborations
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Tips to Improve Your Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Upgrade Verification</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Complete ID verification to appear higher in search results
              </p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-accent" />
                <span className="font-medium text-foreground">Respond Faster</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Quick responses improve your trust score and badge eligibility
              </p>
            </div>
            <div className="p-4 rounded-lg bg-warning/5 border border-warning/20">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-warning" />
                <span className="font-medium text-foreground">Add Portfolio Items</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Showcase your best work to attract more brand partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
