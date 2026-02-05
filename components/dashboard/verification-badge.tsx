"use client";

import { Check, Shield, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VerificationLevel } from "@/lib/mock-data";

interface VerificationBadgeProps {
  level: VerificationLevel;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

const badgeConfig = {
  basic: {
    label: "Email Verified",
    icon: Check,
    className: "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30",
  },
  social: {
    label: "Social Verified",
    icon: Check,
    className: "bg-success/20 text-success border-success/30",
  },
  id: {
    label: "ID Verified",
    icon: Shield,
    className: "bg-chart-4/20 text-chart-4 border-chart-4/30",
  },
  premium: {
    label: "Premium",
    icon: Crown,
    className: "bg-warning/20 text-warning border-warning/30",
  },
};

const sizeConfig = {
  sm: {
    badge: "h-5 text-xs px-1.5",
    icon: "w-3 h-3",
  },
  md: {
    badge: "h-6 text-xs px-2",
    icon: "w-3.5 h-3.5",
  },
  lg: {
    badge: "h-7 text-sm px-2.5",
    icon: "w-4 h-4",
  },
};

export function VerificationBadge({
  level,
  showLabel = true,
  size = "md",
}: VerificationBadgeProps) {
  const config = badgeConfig[level];
  const sizes = sizeConfig[size];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        config.className,
        sizes.badge
      )}
    >
      <Icon className={sizes.icon} />
      {showLabel && <span>{config.label}</span>}
    </div>
  );
}
