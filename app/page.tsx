"use client";
import CursorGlow from "components/previews/cursor-glow";
import CursorWrapper from "components/previews/cursor-wrapper";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { geistMono } from "./fonts";

const linkClasses =
  "underline hover:underline-offset-4 underline-offset-2 transition-all duration-300";

export default function Page() {
  return (
    <section className="flex flex-col items-center h-full mt-24 w-full">
      <CursorGlow />
      <CursorWrapper color="250 0 250">
        <h1
          className={`${geistMono.className} bg-gradient-to-r via-sky-500 via-40% to-neutral-600 text-[6rem] bg-clip-text from-violet-700 font-semibold text-transparent`}
        >
          WordUI
        </h1>
      </CursorWrapper>
      <p>
        <Link href={`https://react.dev`} className={linkClasses}>
          React
        </Link>{" "}
        UI components using{" "}
        <Link className={linkClasses} href={"https://ui.shadcn.com"}>
          shadcn
        </Link>
        ,{" "}
        <Link className={linkClasses} href={"https://motion.dev"}>
          framer-motion
        </Link>{" "}
        and{" "}
        <Link href={"https://tailwindcss.com"} className={linkClasses}>
          TailwindCSS
        </Link>
      </p>
      <div className="mt-12 flex flex-row gap-4 items-center">
        <CursorWrapper color="110 110 255">
          <Button asChild onClick={()=> {}} className="mt-8" variant={"ringHover"}>
            <Link href={"/getting-started/introduction"}>Introduction</Link>
          </Button>
        </CursorWrapper>
        <CursorWrapper color="125 125 125">
          <Button asChild className="mt-8" variant={"secondary"}>
            <Link href={"/components/cursor-glow"}>Components</Link>
          </Button>
        </CursorWrapper>
      </div>
    </section>
  );
}
