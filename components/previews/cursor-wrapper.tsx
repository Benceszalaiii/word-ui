"use client";

import useCursorTheme from "hooks/use-cursor-theme";
import React from "react";
import { twMerge } from "tailwind-merge";

const CursorWrapper = React.forwardRef<
  HTMLDivElement,
  { color: string; children: React.ReactNode }
>(({ color, children }, ref) => {
  const { setTheme, setCursorDefault, defaultTheme } = useCursorTheme();
  return (
    <div
      onMouseEnter={() => {
        setTheme(color || defaultTheme);
      }}
      onMouseLeave={setCursorDefault}
      ref={ref}
      style={{ display: "contents" }}
    >
      {children}
    </div>
  );
});

CursorWrapper.displayName = "CursorWrapper";
export default CursorWrapper;

export function Section({
  children,
  title,
  className,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={twMerge(
        "relative mt-8 flex w-full max-w-screen-md flex-col items-center justify-center gap-4 rounded-lg border border-border bg-opacity-10 p-8 backdrop-blur-lg md:gap-8 md:overflow-hidden",
        className
      )}
    >
      <legend
        about="Legend"
        className="self-start absolute top-2 left-4 text-lg font-semibold text-opacity-75 select-none -z-10 text-black/75 animate-in dark:text-white/75"
      >
        {title}
      </legend>

      {children}
    </section>
  );
}
