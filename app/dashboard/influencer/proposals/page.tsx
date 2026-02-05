"use client";

import { useState } from "react";
import {
  Calendar,
  IndianRupee,
  Users,
  FileText,
  Send,
  Building2,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { mockProposals } from "@/lib/mock-data";

export default function InfluencerProposals() {
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);
  const [appliedProposals, setAppliedProposals] = useState<string[]>([]);

  const handleApply = (proposalId: string) => {
    setAppliedProposals([...appliedProposals, proposalId]);
    setSelectedProposal(null);
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Open Proposals"
        subtitle="Browse and apply to brand campaigns"
      />

      <div className="p-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button className="rounded-full">All Proposals</Button>
          <Button variant="outline" className="rounded-full bg-transparent">
            My Applications
          </Button>
          <Button variant="outline" className="rounded-full bg-transparent">
            Saved
          </Button>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockProposals.map((proposal) => {
            const hasApplied = appliedProposals.includes(proposal.id);

            return (
              <div
                key={proposal.id}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {proposal.brandName}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {proposal.title}
                    </h3>
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

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {proposal.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <IndianRupee className="w-4 h-4" />
                      <span>
                        ₹{(proposal.budget.min / 1000).toFixed(0)}K - ₹
                        {(proposal.budget.max / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Budget</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2 text-foreground font-semibold">
                      <Calendar className="w-4 h-4" />
                      <span>{proposal.deadline}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Deadline</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    DELIVERABLES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proposal.deliverables.map((deliverable, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-secondary text-xs text-foreground"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{proposal.applicants} applicants</span>
                  </div>
                  {hasApplied ? (
                    <span className="px-4 py-2 rounded-lg bg-success/20 text-success text-sm font-medium">
                      Applied
                    </span>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => setSelectedProposal(proposal.id)}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Modal */}
        {selectedProposal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProposal(null)}
            />
            <div className="relative w-full max-w-lg rounded-2xl bg-card border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Apply to Campaign
              </h2>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleApply(selectedProposal);
                }}
              >
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Your Pitch
                  </label>
                  <textarea
                    placeholder="Tell the brand why you're a great fit for this campaign..."
                    rows={4}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Your Quote (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your price"
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Estimated Timeline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 5-7 days"
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Portfolio Links (Optional)
                  </label>
                  <textarea
                    placeholder="Add links to relevant past work..."
                    rows={2}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setSelectedProposal(null)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
