import { Button } from "@/components/ui/button";
import Link from "next/link";
import { geistMono } from "./fonts";

const linkClasses =
  "underline hover:underline-offset-4 underline-offset-2 transition-all duration-300";

export default function Page() {
  return (
    <section className="flex flex-col items-center h-full mt-24 w-full">
      <h1
        className={`${geistMono.className} bg-gradient-to-r via-sky-500 via-40% to-neutral-600 text-[6rem] bg-clip-text from-violet-700 font-semibold text-transparent`}
      >
        WordUI
      </h1>
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
        <Button asChild className="mt-8" variant={"ringHover"}>
          <Link href={"/introduction"}>Introduction</Link>
        </Button>
        <Button asChild className="mt-8" variant={"secondary"}>
          <Link href={"/components"}>Components</Link>
        </Button>
      </div>
    </section>
  );
}
