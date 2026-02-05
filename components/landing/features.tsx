"use client";

import {
  ShieldCheck,
  BarChart3,
  Users,
  Wallet,
  Search,
  Star,
  FileCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Multi-Level Verification",
    description:
      "From email to government ID verification, our 4-tier system ensures authentic creators and brands.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track performance across Instagram, YouTube, Twitter with verified metrics and engagement data.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description:
      "AI-powered search with filters for niche, engagement, location, language, and budget range.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Star,
    title: "Trust Score System",
    description:
      "Data-driven quality scores based on engagement, completion rate, ratings, and response time.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: FileCheck,
    title: "Structured Proposals",
    description:
      "End-to-end proposal workflow from brief to delivery with milestone tracking.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Wallet,
    title: "Escrow Payments",
    description:
      "Secure milestone-based payments with dispute resolution and fraud protection.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Portfolio Showcase",
    description:
      "Rich media portfolios with past campaigns, metrics, and brand testimonials.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: TrendingUp,
    title: "Growth Insights",
    description:
      "Track your ranking, profile views, and collaboration trends over time.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-card/30">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for India&apos;s creator economy with features that establish trust
            and drive results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
