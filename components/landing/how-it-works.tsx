"use client";

import { UserPlus, Search, FileText, Handshake, IndianRupee } from "lucide-react";

const influencerSteps = [
  {
    icon: UserPlus,
    title: "Create Profile",
    description: "Sign up, connect your social accounts, and complete verification",
  },
  {
    icon: FileText,
    title: "Build Portfolio",
    description: "Showcase your best work, past campaigns, and performance metrics",
  },
  {
    icon: Search,
    title: "Get Discovered",
    description: "Brands find you through smart search or you apply to open briefs",
  },
  {
    icon: IndianRupee,
    title: "Get Paid Securely",
    description: "Complete deliverables and receive milestone-based escrow payments",
  },
];

const brandSteps = [
  {
    icon: UserPlus,
    title: "Register Brand",
    description: "Create your brand profile and verify your business credentials",
  },
  {
    icon: Search,
    title: "Find Creators",
    description: "Use smart filters to discover verified creators in your niche",
  },
  {
    icon: FileText,
    title: "Send Proposals",
    description: "Create detailed briefs with budget, deliverables, and timeline",
  },
  {
    icon: Handshake,
    title: "Collaborate",
    description: "Track progress, review content, and release payments on completion",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-card/30">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent process for both creators and brands
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* For Influencers */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">C</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                For Creators
              </h3>
            </div>

            <div className="space-y-6">
              {influencerSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    {index < influencerSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Brands */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">B</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                For Brands
              </h3>
            </div>

            <div className="space-y-6">
              {brandSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    {index < brandSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
