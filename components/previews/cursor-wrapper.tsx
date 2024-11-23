"use client";

import useCursorTheme from "@/hooks/use-cursor-theme";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function CursorWrapper({
  children,
  title,
  className,
  cursorColor,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  cursorColor?: string;
}) {
  const { setTheme, setCursorDefault, defaultTheme } = useCursorTheme();
  return (
    <section
      onMouseEnter={() => {
        setTheme(cursorColor || defaultTheme);
      }}
      onMouseLeave={setCursorDefault}
      className={twMerge(
        "relative mt-8 flex w-full max-w-screen-md flex-col items-center justify-center gap-4 rounded-lg border border-border bg-opacity-10 p-8 backdrop-blur-lg md:gap-8 md:overflow-hidden",
        className
      )}
    >
      <legend
        about="Legend"
        className="self-start text-lg font-semibold text-opacity-75 select-none -z-10 text-black/75 animate-in dark:text-white/75"
      >
        {title}
      </legend>

      {children}
    </section>
  );
}
