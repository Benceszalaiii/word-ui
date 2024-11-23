"use client";

import { geistMono } from "@/app/fonts";

import { LayoutPanelLeftIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./themeswitch";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b border-border bg-opacity-75 backdrop-blur-lg px-24 py-4 h-12 flex flex-row justify-evenly items-center ">
      <Link
        className={`${geistMono.className} bg-gradient-to-r via-sky-500 via-40% to-neutral-600 text-2xl bg-clip-text from-violet-700 font-semibold text-transparent`}
        href={"/"}
      >
        WordUI
      </Link>
      <div className="flex flex-row gap-2">
        <Link
          href={`/introduction`}
          className="px-4 group py-2 flex flex-row items-center gap-1 hover:bg-neutral-200 hover:dark:bg-neutral-800 bg-opacity-50 rounded-lg"
        >
          Introduction
        </Link>
        <Link
          href={`/components`}
          className="px-4 group py-2 flex flex-row items-center gap-1 hover:bg-neutral-200 hover:dark:bg-neutral-800 bg-opacity-50 rounded-lg"
        >
          <LayoutPanelLeftIcon className="h-4 w-4" />
          Components
        </Link>
        <Link
          href={`/hooks`}
          className="px-4 group py-2 flex flex-row items-center gap-1 hover:bg-neutral-200 hover:dark:bg-neutral-800 bg-opacity-50 rounded-lg"
        >
          <LinkIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />
          Hooks
        </Link>
      </div>
      <ModeToggle className="justify-self-end" />
    </nav>
  );
}
