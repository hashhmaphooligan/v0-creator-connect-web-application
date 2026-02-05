"use client";

import { useState } from "react";
import {
  Plus,
  Calendar,
  Users,
  IndianRupee,
  Eye,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockProposals, niches } from "@/lib/mock-data";

export default function BrandProposals() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  const toggleNiche = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(selectedNiches.filter((n) => n !== niche));
    } else {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="My Proposals"
        subtitle="Manage your campaign proposals"
      />

      <div className="p-6">
        {/* Create New Button */}
        <div className="flex justify-end mb-6">
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus className="w-5 h-5 mr-2" />
            Create New Proposal
          </Button>
        </div>

        {/* Proposals List */}
        <div className="space-y-4">
          {mockProposals.map((proposal) => (
            <div
              key={proposal.id}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {proposal.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        proposal.status === "open"
                          ? "bg-success/20 text-success"
                          : proposal.status === "in-progress"
                            ? "bg-primary/20 text-primary"
                            : proposal.status === "completed"
                              ? "bg-muted text-muted-foreground"
                              : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {proposal.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {proposal.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      ₹{proposal.budget.min.toLocaleString()} - ₹{proposal.budget.max.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {proposal.applicants} applicants
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Due: {proposal.deadline}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {proposal.deliverables.length} deliverables
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive bg-transparent hover:bg-destructive/10">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-4 pt-4 border-t border-border">
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
            </div>
          ))}
        </div>

        {/* Create Proposal Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setShowCreateModal(false)}
            />
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Create New Proposal
              </h2>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-foreground">Campaign Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Summer Collection Launch"
                    className="mt-1 bg-secondary border-border text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-foreground">Description</Label>
                  <textarea
                    id="description"
                    placeholder="Describe your campaign objectives and requirements..."
                    rows={4}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budgetMin" className="text-foreground">Budget Range (₹)</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="budgetMin"
                        type="number"
                        placeholder="Min"
                        className="bg-secondary border-border text-foreground"
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        className="bg-secondary border-border text-foreground"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="deadline" className="text-foreground">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      className="mt-1 bg-secondary border-border text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-foreground">Target Niches</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {niches.map((niche) => (
                      <button
                        key={niche}
                        type="button"
                        onClick={() => toggleNiche(niche)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          selectedNiches.includes(niche)
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {niche}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="deliverables" className="text-foreground">Deliverables</Label>
                  <textarea
                    id="deliverables"
                    placeholder="List required deliverables (one per line)&#10;e.g., 2 Instagram Reels&#10;3 Stories&#10;1 Feed Post"
                    rows={4}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="guidelines" className="text-foreground">Brand Guidelines (Optional)</Label>
                  <textarea
                    id="guidelines"
                    placeholder="Any specific requirements for content creation..."
                    rows={3}
                    className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowCreateModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1">
                    Create Proposal
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
