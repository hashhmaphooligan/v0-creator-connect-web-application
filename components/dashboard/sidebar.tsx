"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  LayoutDashboard,
  User,
  BarChart3,
  FolderKanban,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  FileText,
  Users,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  role: "influencer" | "brand" | "admin";
}

const influencerLinks = [
  { href: "/dashboard/influencer", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/influencer/profile", icon: User, label: "My Profile" },
  { href: "/dashboard/influencer/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/dashboard/influencer/portfolio", icon: FolderKanban, label: "Portfolio" },
  { href: "/dashboard/influencer/proposals", icon: FileText, label: "Proposals" },
  { href: "/dashboard/influencer/collaborations", icon: MessageSquare, label: "Collaborations" },
  { href: "/dashboard/influencer/earnings", icon: Wallet, label: "Earnings" },
  { href: "/dashboard/influencer/settings", icon: Settings, label: "Settings" },
];

const brandLinks = [
  { href: "/dashboard/brand", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/brand/discover", icon: Search, label: "Discover" },
  { href: "/dashboard/brand/campaigns", icon: FolderKanban, label: "Campaigns" },
  { href: "/dashboard/brand/proposals", icon: FileText, label: "My Proposals" },
  { href: "/dashboard/brand/collaborations", icon: MessageSquare, label: "Collaborations" },
  { href: "/dashboard/brand/settings", icon: Settings, label: "Settings" },
];

const adminLinks = [
  { href: "/dashboard/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/admin/users", icon: Users, label: "Users" },
  { href: "/dashboard/admin/verifications", icon: Shield, label: "Verifications" },
  { href: "/dashboard/admin/disputes", icon: MessageSquare, label: "Disputes" },
  { href: "/dashboard/admin/settings", icon: Settings, label: "Settings" },
];

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const links =
    role === "influencer"
      ? influencerLinks
      : role === "brand"
        ? brandLinks
        : adminLinks;

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col z-40">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            CreatorConnect
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {role === "influencer" ? "Priya Sharma" : role === "brand" ? "StyleBox India" : "Admin User"}
            </p>
            <p className="text-xs text-muted-foreground capitalize">{role}</p>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
