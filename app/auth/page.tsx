"use client";

import React from "react"

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  Mail,
  Lock,
  User,
  Building2,
  ArrowRight,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AuthContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialMode = searchParams.get("mode") || "register";
  const initialRole = searchParams.get("role") || "influencer";

  const [mode, setMode] = useState<"login" | "register">(
    initialMode as "login" | "register"
  );
  const [role, setRole] = useState<"influencer" | "brand">(
    initialRole as "influencer" | "brand"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate auth - in production, this would call your auth API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect based on role
    if (role === "influencer") {
      router.push("/dashboard/influencer");
    } else {
      router.push("/dashboard/brand");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-12">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            CreatorConnect
          </span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-muted-foreground">
            {mode === "login"
              ? "Sign in to continue to your dashboard"
              : "Join India's most trusted creator platform"}
          </p>
        </div>

        {/* Role Selection (Register only) */}
        {mode === "register" && (
          <div className="mb-6">
            <Label className="text-sm font-medium text-foreground mb-3 block">
              I am a
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("influencer")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  role === "influencer"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-muted-foreground"
                }`}
              >
                <User
                  className={`w-6 h-6 mb-2 ${
                    role === "influencer" ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <p
                  className={`font-semibold ${
                    role === "influencer" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Creator
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Influencer, Model, Artist
                </p>
              </button>
              <button
                type="button"
                onClick={() => setRole("brand")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  role === "brand"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-muted-foreground"
                }`}
              >
                <Building2
                  className={`w-6 h-6 mb-2 ${
                    role === "brand" ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <p
                  className={`font-semibold ${
                    role === "brand" ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Brand
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Business, Agency, Startup
                </p>
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <Label htmlFor="name" className="text-foreground">
                {role === "influencer" ? "Full Name" : "Brand Name"}
              </Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder={
                    role === "influencer" ? "John Doe" : "Your Brand Inc."
                  }
                  className="pl-10 h-12 bg-card border-border text-foreground"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="email" className="text-foreground">
              Email Address
            </Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 h-12 bg-card border-border text-foreground"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-foreground">
              Password
            </Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 h-12 bg-card border-border text-foreground"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base rounded-xl"
            disabled={isLoading}
          >
            {isLoading ? (
              "Please wait..."
            ) : mode === "login" ? (
              "Sign In"
            ) : (
              <>
                Create Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button variant="outline" className="h-12 bg-transparent">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button variant="outline" className="h-12 bg-transparent">
              <Youtube className="w-5 h-5 mr-2" />
              YouTube
            </Button>
          </div>
        </div>

        {/* Toggle Mode */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {mode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("register")}
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/20 via-background to-accent/10 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Verification-First Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Join 15,000+ verified creators and 2,800+ trusted brands building
            authentic collaborations with transparency and trust.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <p className="font-display text-2xl font-bold text-foreground">94%</p>
              <p className="text-xs text-muted-foreground">Completion</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <p className="font-display text-2xl font-bold text-foreground">2.1%</p>
              <p className="text-xs text-muted-foreground">Disputes</p>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <p className="font-display text-2xl font-bold text-foreground">4.8</p>
              <p className="text-xs text-muted-foreground">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}
