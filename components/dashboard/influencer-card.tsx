"use client";

import { MapPin, Users, Star, Clock, IndianRupee } from "lucide-react";
import { VerificationBadge } from "./verification-badge";
import { Button } from "@/components/ui/button";
import type { Influencer } from "@/lib/mock-data";
import Link from "next/link";

interface InfluencerCardProps {
  influencer: Influencer;
  onViewProfile?: () => void;
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={influencer.avatar || "/placeholder.svg"}
          alt={influencer.name}
          className="w-16 h-16 rounded-2xl object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">
              {influencer.name}
            </h3>
            <VerificationBadge
              level={influencer.verificationLevel}
              showLabel={false}
              size="sm"
            />
          </div>
          <p className="text-sm text-muted-foreground">{influencer.username}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <MapPin className="w-3 h-3" />
            <span>{influencer.location}</span>
          </div>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
            <span className="text-xl font-bold text-primary">
              {influencer.qualityScore.toFixed(1)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">Score</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {influencer.bio}
      </p>

      {/* Niches */}
      <div className="flex flex-wrap gap-1 mb-4">
        {influencer.niches.map((niche) => (
          <span
            key={niche}
            className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
          >
            {niche}
          </span>
        ))}
        {influencer.languages.slice(0, 2).map((lang) => (
          <span
            key={lang}
            className="px-2 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="text-center p-2 rounded-lg bg-secondary/50">
          <div className="flex items-center justify-center gap-1 text-foreground font-semibold">
            <Users className="w-3 h-3" />
            <span className="text-sm">{(influencer.followers / 1000).toFixed(0)}K</span>
          </div>
          <p className="text-xs text-muted-foreground">Followers</p>
        </div>
        <div className="text-center p-2 rounded-lg bg-secondary/50">
          <p className="text-sm font-semibold text-foreground">
            {influencer.engagementRate}%
          </p>
          <p className="text-xs text-muted-foreground">Engagement</p>
        </div>
        <div className="text-center p-2 rounded-lg bg-secondary/50">
          <div className="flex items-center justify-center gap-1 text-foreground font-semibold">
            <Star className="w-3 h-3 text-warning" />
            <span className="text-sm">{influencer.averageRating}</span>
          </div>
          <p className="text-xs text-muted-foreground">Rating</p>
        </div>
        <div className="text-center p-2 rounded-lg bg-secondary/50">
          <p className="text-sm font-semibold text-foreground">
            {influencer.totalCollaborations}
          </p>
          <p className="text-xs text-muted-foreground">Collabs</p>
        </div>
      </div>

      {/* Badges */}
      {influencer.badges.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {influencer.badges.map((badge) => (
            <span
              key={badge}
              className="px-2 py-1 rounded-full bg-warning/10 text-xs font-medium text-warning border border-warning/20"
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Pricing & Response Time */}
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <IndianRupee className="w-3 h-3" />
          <span>
            ₹{(influencer.pricing.post.min / 1000).toFixed(0)}K - ₹{(influencer.pricing.post.max / 1000).toFixed(0)}K
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{influencer.responseTime}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Link href={`/dashboard/brand/creator/${influencer.id}`} className="flex-1">
          <Button variant="outline" className="w-full bg-transparent">
            View Profile
          </Button>
        </Link>
        <Button className="flex-1">Send Proposal</Button>
      </div>
    </div>
  );
}
