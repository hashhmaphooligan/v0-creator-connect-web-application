"use client";

import {
  Calendar,
  IndianRupee,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  MessageSquare,
  Upload,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { mockCollaborations } from "@/lib/mock-data";

const statusConfig = {
  pending: {
    label: "Pending",
    color: "bg-warning/20 text-warning",
    icon: Clock,
  },
  active: {
    label: "In Progress",
    color: "bg-primary/20 text-primary",
    icon: Clock,
  },
  "content-review": {
    label: "Under Review",
    color: "bg-accent/20 text-accent",
    icon: FileText,
  },
  completed: {
    label: "Completed",
    color: "bg-success/20 text-success",
    icon: CheckCircle2,
  },
  disputed: {
    label: "Disputed",
    color: "bg-destructive/20 text-destructive",
    icon: AlertCircle,
  },
};

export default function InfluencerCollaborations() {
  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Collaborations"
        subtitle="Manage your active and past collaborations"
      />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-foreground">
              {mockCollaborations.filter((c) => c.status === "active").length}
            </p>
            <p className="text-sm text-muted-foreground">Active</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-foreground">
              {mockCollaborations.filter((c) => c.status === "pending").length}
            </p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-foreground">
              {mockCollaborations.filter((c) => c.status === "completed").length}
            </p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-foreground">
              ₹{mockCollaborations.reduce((sum, c) => sum + c.amount, 0).toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Total Earnings</p>
          </div>
        </div>

        {/* Collaborations List */}
        <div className="space-y-4">
          {mockCollaborations.map((collab) => {
            const status = statusConfig[collab.status];
            const StatusIcon = status.icon;

            return (
              <div
                key={collab.id}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {collab.title}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {collab.brandName}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <IndianRupee className="w-4 h-4" />
                        ₹{collab.amount.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {collab.startDate} - {collab.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {collab.deliverables.length} deliverables
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                    {collab.status === "active" && (
                      <Button size="sm">
                        <Upload className="w-4 h-4 mr-1" />
                        Submit Content
                      </Button>
                    )}
                  </div>
                </div>

                {/* Deliverables Progress */}
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground mb-3">
                    DELIVERABLES
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {collab.deliverables.map((deliverable, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          collab.status === "completed"
                            ? "bg-success/20 text-success"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {collab.status === "completed" && (
                          <CheckCircle2 className="w-3 h-3 inline mr-1" />
                        )}
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Payment Status */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        PAYMENT STATUS
                      </p>
                      <p className="text-sm text-foreground">
                        {collab.status === "completed" ? (
                          <span className="text-success">Payment Released</span>
                        ) : (
                          <span className="text-warning">In Escrow</span>
                        )}
                      </p>
                    </div>
                    {collab.status === "completed" && (
                      <Button variant="outline" size="sm" className="bg-transparent">
                        View Receipt
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {mockCollaborations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No collaborations yet. Apply to proposals to get started!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
