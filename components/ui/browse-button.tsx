"use client";

import { Link } from "next-view-transitions";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export function BrowseComponentsButton() {
  return (
    <Link
      href="/docs/components/action-search-bar"
      className="flex items-center gap-8"
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.25 } }}
        whileHover={{ x: 8, transition: { duration: 0.2 } }}
      >
        <Button
          className={cn(
            "relative inline-flex items-center justify-center gap-4 rounded-xl font-semibold",
            "h-12 px-6 min-w-[14rem] md:min-w-[14rem]",
            // Light bluish gradient background
            "bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200",
            "text-indigo-900",
            "border border-blue-200",
            "shadow-[0_4px_24px_0_rgba(165,180,252,0.18)]",
            "backdrop-blur-sm",
            "transition-shadow duration-300 ease-in-out",
            "hover:shadow-[0_8px_32px_0_rgba(99,102,241,0.18)]",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
            // Optional: subtle texture overlay using a pseudo-element (add this in your CSS if you want)
            "before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:opacity-30 before:bg-[url('/noise-light.png')]"
          )}
        >
          <span className="font-semibold tracking-wide select-none">
            Browse Components
          </span>
          <ArrowDownRight className="w-5 h-5 rotate-[270deg]" />
        </Button>
      </motion.div>
    </Link>
  );
}
