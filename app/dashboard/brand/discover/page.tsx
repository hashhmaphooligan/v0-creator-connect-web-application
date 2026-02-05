"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/header";
import { InfluencerCard } from "@/components/dashboard/influencer-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockInfluencers, niches, languages, verificationLevels } from "@/lib/mock-data";

const followerRanges = [
  { label: "All Sizes", min: 0, max: Infinity },
  { label: "Nano (1K-10K)", min: 1000, max: 10000 },
  { label: "Micro (10K-100K)", min: 10000, max: 100000 },
  { label: "Mid (100K-500K)", min: 100000, max: 500000 },
  { label: "Macro (500K+)", min: 500000, max: Infinity },
];

const engagementRanges = [
  { label: "Any", min: 0 },
  { label: "> 2%", min: 2 },
  { label: "> 4%", min: 4 },
  { label: "> 6%", min: 6 },
];

const sortOptions = [
  { label: "Quality Score", value: "qualityScore" },
  { label: "Engagement Rate", value: "engagementRate" },
  { label: "Followers", value: "followers" },
  { label: "Rating", value: "rating" },
];

export default function BrandDiscover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedVerification, setSelectedVerification] = useState<string[]>([]);
  const [followerRange, setFollowerRange] = useState(followerRanges[0]);
  const [engagementMin, setEngagementMin] = useState(engagementRanges[0]);
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  const toggleFilter = (
    item: string,
    selected: string[],
    setSelected: (items: string[]) => void
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const clearFilters = () => {
    setSelectedNiches([]);
    setSelectedLanguages([]);
    setSelectedVerification([]);
    setFollowerRange(followerRanges[0]);
    setEngagementMin(engagementRanges[0]);
  };

  // Filter influencers
  const filteredInfluencers = mockInfluencers.filter((influencer) => {
    // Search query
    if (
      searchQuery &&
      !influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !influencer.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !influencer.niches.some((n) =>
        n.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    // Niche filter
    if (
      selectedNiches.length > 0 &&
      !influencer.niches.some((n) => selectedNiches.includes(n))
    ) {
      return false;
    }

    // Language filter
    if (
      selectedLanguages.length > 0 &&
      !influencer.languages.some((l) => selectedLanguages.includes(l))
    ) {
      return false;
    }

    // Verification filter
    if (
      selectedVerification.length > 0 &&
      !selectedVerification.includes(influencer.verificationLevel)
    ) {
      return false;
    }

    // Follower range
    if (
      influencer.followers < followerRange.min ||
      influencer.followers > followerRange.max
    ) {
      return false;
    }

    // Engagement rate
    if (influencer.engagementRate < engagementMin.min) {
      return false;
    }

    return true;
  });

  // Sort influencers
  const sortedInfluencers = [...filteredInfluencers].sort((a, b) => {
    switch (sortBy.value) {
      case "qualityScore":
        return b.qualityScore - a.qualityScore;
      case "engagementRate":
        return b.engagementRate - a.engagementRate;
      case "followers":
        return b.followers - a.followers;
      case "rating":
        return b.averageRating - a.averageRating;
      default:
        return 0;
    }
  });

  const activeFilterCount =
    selectedNiches.length +
    selectedLanguages.length +
    selectedVerification.length +
    (followerRange !== followerRanges[0] ? 1 : 0) +
    (engagementMin !== engagementRanges[0] ? 1 : 0);

  return (
    <div className="min-h-screen">
      <DashboardHeader
        title="Discover Creators"
        subtitle="Find verified influencers for your campaigns"
      />

      <div className="p-6">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, username, or niche..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 bg-card border-border text-foreground"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className={`h-12 bg-transparent ${showFilters ? "border-primary text-primary" : ""}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </Button>
            <div className="relative">
              <Button variant="outline" className="h-12 bg-transparent">
                Sort: {sortBy.label}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
              {/* Sort dropdown would go here */}
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="p-6 rounded-xl bg-card border border-border mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Filters</h3>
              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Niches */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Niche</p>
                <div className="flex flex-wrap gap-2">
                  {niches.map((niche) => (
                    <button
                      key={niche}
                      onClick={() =>
                        toggleFilter(niche, selectedNiches, setSelectedNiches)
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
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
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() =>
                        toggleFilter(language, selectedLanguages, setSelectedLanguages)
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
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

              {/* Verification Level */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Verification Level
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(verificationLevels).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() =>
                        toggleFilter(key, selectedVerification, setSelectedVerification)
                      }
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        selectedVerification.includes(key)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {value.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Follower Range */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Follower Count
                </p>
                <div className="flex flex-wrap gap-2">
                  {followerRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setFollowerRange(range)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        followerRange === range
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Engagement Rate */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Min Engagement Rate
                </p>
                <div className="flex flex-wrap gap-2">
                  {engagementRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setEngagementMin(range)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        engagementMin === range
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedNiches.map((niche) => (
              <span
                key={niche}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {niche}
                <button
                  onClick={() =>
                    setSelectedNiches(selectedNiches.filter((n) => n !== niche))
                  }
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedLanguages.map((lang) => (
              <span
                key={lang}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
              >
                {lang}
                <button
                  onClick={() =>
                    setSelectedLanguages(selectedLanguages.filter((l) => l !== lang))
                  }
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing {sortedInfluencers.length} creators
        </p>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedInfluencers.map((influencer) => (
            <InfluencerCard key={influencer.id} influencer={influencer} />
          ))}
        </div>

        {sortedInfluencers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No creators found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
