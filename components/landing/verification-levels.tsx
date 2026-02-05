"use client";

import { Mail, Instagram, CreditCard, Crown, Check } from "lucide-react";

const levels = [
  {
    icon: Mail,
    level: "Basic",
    label: "Email Verified",
    color: "bg-muted-foreground",
    borderColor: "border-muted-foreground/30",
    requirements: ["Email confirmation", "Basic profile setup"],
    benefits: ["Create profile", "Browse opportunities"],
  },
  {
    icon: Instagram,
    level: "Social",
    label: "Social Verified",
    color: "bg-success",
    borderColor: "border-success/30",
    requirements: [
      "Connect Instagram/YouTube",
      "Verify via unique code post",
    ],
    benefits: [
      "Display real follower count",
      "Apply to collaborations",
      "Receive proposals",
    ],
  },
  {
    icon: CreditCard,
    level: "ID",
    label: "ID Verified",
    color: "bg-chart-4",
    borderColor: "border-chart-4/30",
    requirements: [
      "Government ID (Aadhaar/PAN)",
      "DigiLocker verification",
    ],
    benefits: [
      "Blue verified badge",
      "Higher trust score",
      "Priority in search results",
    ],
  },
  {
    icon: Crown,
    level: "Premium",
    label: "Premium Verified",
    color: "bg-warning",
    borderColor: "border-warning/30",
    requirements: [
      "Background check",
      "Manual review by team",
      "Track record verification",
    ],
    benefits: [
      "Gold verified badge",
      "Top search placement",
      "Featured creator status",
      "Priority support",
    ],
  },
];

export function VerificationLevels() {
  return (
    <section id="verification" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trust Through Verification
          </h2>
          <p className="text-lg text-muted-foreground">
            Our 4-tier verification system ensures authentic creators and
            legitimate brands
          </p>
        </div>

        {/* Verification Levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((item, index) => (
            <div
              key={item.level}
              className={`relative p-6 rounded-2xl bg-card border-2 ${item.borderColor} hover:scale-105 transition-transform duration-300`}
            >
              {/* Level number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                {index + 1}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-4`}
              >
                <item.icon className="w-7 h-7 text-background" />
              </div>

              {/* Label */}
              <h3 className="font-semibold text-lg mb-1 text-foreground">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Level {index + 1} Verification
              </p>

              {/* Requirements */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Requirements
                </p>
                <ul className="space-y-1">
                  {item.requirements.map((req) => (
                    <li
                      key={req}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Benefits
                </p>
                <ul className="space-y-1">
                  {item.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
