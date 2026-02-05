"use client";

import { useState } from "react";
import {
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Globe,
  Camera,
  Save,
  Plus,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { VerificationBadge } from "@/components/dashboard/verification-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockInfluencers, niches, languages } from "@/lib/mock-data";

const currentUser = mockInfluencers[0];

export default function InfluencerProfile() {
  const [selectedNiches, setSelectedNiches] = useState(currentUser.niches);
  const [selectedLanguages, setSelectedLanguages] = useState(currentUser.languages);

  const toggleNiche = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(selectedNiches.filter((n) => n !== niche));
    } else if (selectedNiches.length < 3) {
      setSelectedNiches([...selectedNiches, niche]);
    }
  };

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader title="My Profile" subtitle="Manage your creator profile" />

      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={currentUser.avatar || "/placeholder.svg"}
                alt={currentUser.name}
                className="w-32 h-32 rounded-2xl object-cover"
              />
              <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-foreground">
                  {currentUser.name}
                </h2>
                <VerificationBadge level={currentUser.verificationLevel} />
              </div>
              <p className="text-muted-foreground">{currentUser.username}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {currentUser.location}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  {currentUser.languages.join(", ")}
                </span>
              </div>
            </div>

            {/* Verification Status */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm font-medium text-foreground mb-2">
                Verification Level
              </p>
              <VerificationBadge level={currentUser.verificationLevel} size="lg" />
              <Button variant="link" className="text-primary p-0 h-auto mt-2">
                Upgrade Verification
              </Button>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name</Label>
              <Input
                id="name"
                defaultValue={currentUser.name}
                className="mt-1 bg-secondary border-border text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="username" className="text-foreground">Username</Label>
              <Input
                id="username"
                defaultValue={currentUser.username}
                className="mt-1 bg-secondary border-border text-foreground"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="bio" className="text-foreground">Bio</Label>
              <textarea
                id="bio"
                defaultValue={currentUser.bio}
                rows={3}
                className="mt-1 w-full px-3 py-2 rounded-md bg-secondary border border-border text-foreground resize-none"
              />
            </div>
            <div>
              <Label htmlFor="location" className="text-foreground">Location</Label>
              <Input
                id="location"
                defaultValue={currentUser.location}
                className="mt-1 bg-secondary border-border text-foreground"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="priya@example.com"
                className="mt-1 bg-secondary border-border text-foreground"
              />
            </div>
          </div>
        </div>

        {/* Niches */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Content Niches
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Select up to 3 niches that best describe your content
          </p>
          <div className="flex flex-wrap gap-2">
            {niches.map((niche) => (
              <button
                key={niche}
                onClick={() => toggleNiche(niche)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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

        {/* Languages */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Languages
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Languages you can create content in
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => toggleLanguage(language)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLanguages.includes(language)
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>

        {/* Social Accounts */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Connected Social Accounts
          </h3>
          <div className="space-y-4">
            {/* Instagram */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">
                    {currentUser.platforms.instagram?.followers.toLocaleString()} followers
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                Connected
              </span>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">YouTube</p>
                  <p className="text-sm text-muted-foreground">
                    {currentUser.platforms.youtube?.subscribers.toLocaleString()} subscribers
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                Connected
              </span>
            </div>

            {/* Twitter */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Twitter / X</p>
                  <p className="text-sm text-muted-foreground">Not connected</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                <Plus className="w-4 h-4 mr-1" />
                Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Pricing
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Set your rates for different deliverables
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-foreground">Feed Post (₹)</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  type="number"
                  placeholder="Min"
                  defaultValue={currentUser.pricing.post.min}
                  className="bg-secondary border-border text-foreground"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  defaultValue={currentUser.pricing.post.max}
                  className="bg-secondary border-border text-foreground"
                />
              </div>
            </div>
            <div>
              <Label className="text-foreground">Reel / Short Video (₹)</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  type="number"
                  placeholder="Min"
                  defaultValue={currentUser.pricing.reel.min}
                  className="bg-secondary border-border text-foreground"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  defaultValue={currentUser.pricing.reel.max}
                  className="bg-secondary border-border text-foreground"
                />
              </div>
            </div>
            <div>
              <Label className="text-foreground">Story (₹)</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  type="number"
                  placeholder="Min"
                  defaultValue={currentUser.pricing.story.min}
                  className="bg-secondary border-border text-foreground"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  defaultValue={currentUser.pricing.story.max}
                  className="bg-secondary border-border text-foreground"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg" className="px-8">
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
