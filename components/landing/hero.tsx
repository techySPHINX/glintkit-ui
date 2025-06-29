"use client";

import type React from "react";

import Link from "next/link";
import TailwindCSS from "@/components/icons/tailwindcss";
import { motion } from "motion/react";

import { Sparkles } from "lucide-react";
import { Btn14 } from "../glintkitui/button/btn-14";
import Btn03 from "../glintkitui/button/btn-03";
import Input09 from "../glintkitui/input/input-09";
import AIInput_02 from "../glintkitui/ai-input/ai-input-02";

import Card08 from "../glintkitui/card/card-08";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";
import Features from "./feature-block";

import Card02 from "../glintkitui/card/card-02";

// interface Action {
//   id: string;
//   label: string;
//   icon: React.ReactNode;
//   description?: string;
//   short?: string;
//   end?: string;
// }

export function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      {/* Left side - Title and CTA */}
      <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="
    text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]
    text-zinc-900 dark:text-white
    drop-shadow dark:drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]
  "
          >
            Craft with{" "}
            <span
              className="
      bg-clip-text text-transparent
      bg-gradient-to-r
      from-pink-600 via-fuchsia-500 to-purple-600
      dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300
      dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]
    "
              style={{
                WebkitTextStroke: "0.5px rgba(0,0,0,0.12)",
              }}
            >
              precision
            </span>
            <br />
            build with{" "}
            <span
              className="
      bg-clip-text text-transparent
      bg-gradient-to-r
      from-purple-600 via-fuchsia-500 to-pink-600
      dark:from-indigo-300 dark:via-blue-400 dark:to-cyan-300
      dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]
    "
              style={{
                WebkitTextStroke: "0.5px rgba(0,0,0,0.12)",
              }}
            >
              ease
            </span>
            .
          </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-200 max-w-xl font-medium leading-relaxed">
            <span className="inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-300">
              100+ premium UI components
            </span>{" "}
            for modern React & Next.js apps, crafted with{" "}
            <span className="inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-500 dark:from-rose-400 dark:to-fuchsia-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 dark:from-fuchsia-400 dark:to-purple-400">
              shadcn/ui
            </span>
            . Build beautiful interfaces with{" "}
            <span className="font-semibold text-purple-600 dark:text-cyan-300">ease</span> and{" "}
            <span className="font-semibold text-pink-600 dark:text-indigo-300">precision</span>.
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full"
        >
            <span className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-300 pb-3">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              <span className="font-medium">
              Now updated for Tailwind CSS 4.0!
              </span>
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
              <Sparkles className="h-3 w-3 mr-1" />
              New
              </span>
            </span>
            </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>

        <Features />
      </div>

      {/* Right side - Components Layout */}
      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
        >
          {/* Card component */}
          <div className="w-full flex flex-col items-center justify-center ">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              {"<Card/>"}
            </span>
            <Card08 href="/docs/components/card" />
          </div>

          <div className="w-full max-w-[600px] bg-transparent">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Components
            </span>

            <Card02 />
          </div>
        </motion.div>

        {/* Middle row: AI Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
          </span>
          {/* <AIInput_04 /> */}
          <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            <AIInput_02 />
          </div>
        </motion.div>

        {/* Bottom row: Buttons on left, Input on right */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left side - Buttons */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Buttons
            </span>
            <div className="w-full h-48 rounded-xl  border border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center gap-3">
              <Link href="/docs/components/button">
                <Btn14 label="Bring me" className=" w-42 py-5" />
              </Link>
              <Link href="/docs/components/button">
                <Btn03 className=" w-42 py-5" />
              </Link>
            </div>
          </div>

          {/* Right side - Input */}
          <div className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Input
            </span>
            <Link href="/docs/components/input">
              <Input09 />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
