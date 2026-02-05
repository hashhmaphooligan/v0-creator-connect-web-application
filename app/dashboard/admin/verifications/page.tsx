"use client";

import { useState } from "react";
import {
  Shield,
  CheckCircle2,
  XCircle,
  Eye,
  Search,
  Filter,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock verification requests
const verificationRequests = [
  {
    id: "1",
    name: "Amit Kumar",
    username: "@amitkumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    currentLevel: "social",
    requestedLevel: "id",
    submittedAt: "2026-02-05 10:30",
    documents: ["Aadhaar Card", "PAN Card"],
    status: "pending",
  },
  {
    id: "2",
    name: "Neha Gupta",
    username: "@nehagupta",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    currentLevel: "id",
    requestedLevel: "premium",
    submittedAt: "2026-02-05 08:15",
    documents: ["Background Check", "Work History"],
    status: "pending",
  },
  {
    id: "3",
    name: "Ravi Singh",
    username: "@ravisingh",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    currentLevel: "basic",
    requestedLevel: "social",
    submittedAt: "2026-02-04 16:45",
    documents: ["Instagram Verification"],
    status: "pending",
  },
  {
    id: "4",
    name: "Pooja Sharma",
    username: "@poojasharma",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    currentLevel: "social",
    requestedLevel: "id",
    submittedAt: "2026-02-04 14:20",
    documents: ["Aadhaar Card"],
    status: "approved",
  },
  {
    id: "5",
    name: "Vikram Patel",
    username: "@vikrampatel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    currentLevel: "basic",
    requestedLevel: "social",
    submittedAt: "2026-02-04 11:00",
    documents: ["YouTube Verification"],
    status: "rejected",
  },
];

const levelLabels = {
  basic: "Email Verified",
  social: "Social Verified",
  id: "ID Verified",
  premium: "Premium",
};

const levelColors = {
  basic: "bg-muted-foreground/20 text-muted-foreground",
  social: "bg-success/20 text-success",
  id: "bg-chart-4/20 text-chart-4",
  premium: "bg-warning/20 text-warning",
};

export default function AdminVerifications() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = verificationRequests.filter((req) => {
    if (filter !== "all" && req.status !== filter) return false;
    if (
      searchQuery &&
      !req.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !req.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Verifications"
        subtitle="Review and manage verification requests"
      />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-foreground">
              {verificationRequests.filter((r) => r.status === "pending").length}
            </p>
            <p className="text-sm text-muted-foreground">Pending</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-success">
              {verificationRequests.filter((r) => r.status === "approved").length}
            </p>
            <p className="text-sm text-muted-foreground">Approved Today</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-destructive">
              {verificationRequests.filter((r) => r.status === "rejected").length}
            </p>
            <p className="text-sm text-muted-foreground">Rejected Today</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <p className="text-2xl font-bold text-foreground">2.5h</p>
            <p className="text-sm text-muted-foreground">Avg. Review Time</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border text-foreground"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter !== "all" ? "bg-transparent" : ""}
            >
              All
            </Button>
            <Button
              variant={filter === "pending" ? "default" : "outline"}
              onClick={() => setFilter("pending")}
              className={filter !== "pending" ? "bg-transparent" : ""}
            >
              Pending
            </Button>
            <Button
              variant={filter === "approved" ? "default" : "outline"}
              onClick={() => setFilter("approved")}
              className={filter !== "approved" ? "bg-transparent" : ""}
            >
              Approved
            </Button>
            <Button
              variant={filter === "rejected" ? "default" : "outline"}
              onClick={() => setFilter("rejected")}
              className={filter !== "rejected" ? "bg-transparent" : ""}
            >
              Rejected
            </Button>
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request) => (
            <div
              key={request.id}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={request.avatar || "/placeholder.svg"}
                    alt={request.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {request.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {request.username}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Submitted: {request.submittedAt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Current</p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[request.currentLevel as keyof typeof levelColors]}`}
                    >
                      {levelLabels[request.currentLevel as keyof typeof levelLabels]}
                    </span>
                  </div>
                  <span className="text-muted-foreground">→</span>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Requested</p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[request.requestedLevel as keyof typeof levelColors]}`}
                    >
                      {levelLabels[request.requestedLevel as keyof typeof levelLabels]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {request.status === "pending" ? (
                    <>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                      <Button
                        size="sm"
                        className="bg-success hover:bg-success/90 text-white"
                      >
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive bg-transparent hover:bg-destructive/10"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  ) : (
                    <span
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        request.status === "approved"
                          ? "bg-success/20 text-success"
                          : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {request.status === "approved" ? "Approved" : "Rejected"}
                    </span>
                  )}
                </div>
              </div>

              {/* Documents */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  SUBMITTED DOCUMENTS
                </p>
                <div className="flex flex-wrap gap-2">
                  {request.documents.map((doc, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-secondary text-xs text-foreground"
                    >
                      {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No verification requests found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
