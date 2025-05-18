import { cn } from "@/lib/utils";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import Image from "next/image";


export default function List06() {
    return (
        <div
            className={cn(
                "w-full max-w-xl mx-auto",
                "bg-white dark:bg-zinc-900",
                "border border-zinc-200 dark:border-zinc-800",
                "rounded-2xl shadow-xs overflow-hidden"
            )}
        >
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                        <Image
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                            alt="Author"
                            width={32}  // match w-8 (8 * 4 = 32px)
                            height={32}
                            className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800"
                        />

                        <div>
                            <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Sarah Chen
                                </h3>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500">
                                    2h
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <MoreHorizontal className="w-4 h-4 text-zinc-400" />
                    </button>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-normal">
                    The new AI features in Figma are incredible! Just tried the
                    new variables system - it&#39;s a game changer for design
                    systems. 🎨
                </p>
            </div>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="p-4">
                    <div className="flex gap-3">
                        <Image
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png"
                            alt="Responder"
                            width={28}   // w-7 in Tailwind = 7 * 4 = 28px
                            height={28}
                            className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800 flex-none"
                        />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Alex Rivera
                                </span>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500">
                                    45m
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                Agreed! The auto-layout improvements are
                                fantastic too. Makes responsive design so much
                                easier.
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-rose-500 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    <span>18</span>
                                </button>
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 pl-12">
                    <div className="flex gap-3">
                        <Image
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
                            alt="Responder"
                            width={28}   // w-7 = 7 * 4px = 28px
                            height={28}
                            className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800 flex-none"
                        />
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Maya Patel
                                </span>
                                <span className="text-xs text-zinc-500">·</span>
                                <span className="text-xs text-zinc-500">
                                    12m
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-300">
                                Have you tried the new component variants?
                                They&#39;re perfect for theming!
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-rose-500 transition-colors"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    <span>8</span>
                                </button>
                                <button
                                    type="button"
                                    className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-blue-500 transition-colors"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Reply</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <div className="flex items-center gap-2">
                        <Image
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-03-JateJIUhtd3PXynaMG9TDWQ55j5AVP.png"
                            alt="Your avatar"
                            width={28}   // 7 * 4px = 28px
                            height={28}
                            className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-800"
                        />
                        <input
                            type="text"
                            placeholder="Add to discussion..."
                            className="flex-1 text-sm bg-transparent text-zinc-900 dark:text-zinc-100 
                                placeholder:text-zinc-400 focus:outline-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
