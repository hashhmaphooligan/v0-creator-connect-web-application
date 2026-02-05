"use client";

import { ArrowRight, CheckCircle2, Shield, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Verification-First Platform
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Trust Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Creator Economy
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A verification-first professional networking and collaboration platform bringing trust, transparency, and accountability to India&apos;s creator economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/auth?role=influencer">
              <Button size="lg" className="text-lg px-8 h-14 rounded-full">
                Join as Creator
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/auth?role=brand">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 rounded-full bg-transparent"
              >
                Find Creators
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
              <CheckCircle2 className="w-6 h-6 text-success" />
              <div className="text-left">
                <p className="font-semibold text-foreground">15,000+</p>
                <p className="text-sm text-muted-foreground">Verified Creators</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
              <Users className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">2,800+</p>
                <p className="text-sm text-muted-foreground">Trusted Brands</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border">
              <Shield className="w-6 h-6 text-accent" />
              <div className="text-left">
                <p className="font-semibold text-foreground">94.5%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
