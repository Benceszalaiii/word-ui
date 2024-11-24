"use client";

import { geistMono } from "../app/fonts";

import { BookTextIcon, LayoutPanelLeftIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./themeswitch";
import { buttonVariants } from "./ui/button";

const itemClasses = `${buttonVariants({variant: "ghost"})} gap-2 hidden md:flex`;

export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 w-full border-b border-border bg-opacity-75 bg-white/75 dark:bg-black/75 backdrop-blur-lg md:px-24 px-4 py-4 h-16 flex flex-row justify-evenly items-center ">
      <Link
        className={`${geistMono.className} bg-gradient-to-r mr-auto via-sky-500 via-40% to-neutral-600 text-2xl bg-clip-text from-violet-700 font-semibold text-transparent`}
        href={"/"}
      >
        WordUI
      </Link>
      <div className="flex flex-row gap-2">
        <Link
          href={`/getting-started/installation`}
          className={`${itemClasses}`}
        >
          Introduction
        </Link>
        <Link
          href={`/components/cursor-glow`}
          className={`${itemClasses}`}
        >
          <LayoutPanelLeftIcon className="h-4 w-4" />
          Components
        </Link>
        <Link
          href={`/hooks/usecursortheme`}
          className={`${itemClasses}`}
        >
          <LinkIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-300" />
          Hooks
        </Link>
        <Link className={`${buttonVariants({variant: "outline"})} px-4 ml-auto group py-2 mr-2 flex md:hidden flex-row items-center gap-1`} href={"/getting-started/installation"}>
        <BookTextIcon className="h-4 w-4" />
        </Link>
      </div>
      <ModeToggle className="md:ml-4" />
    </nav>
  );
}
