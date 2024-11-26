import { geistMono } from "../app/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-12 items-center justify-center w-full h-16 bg-neutral-200 dark:bg-neutral-900">
      <p className={`${geistMono.className}`}>
        Project by
        <Link
          href={"https://www.github.com/benceszalaiii"}
          className="text-neutral-800 font-semibold font-mono dark:text-neutral-200"
        >
          {" "}
          Benceszalaiii
        </Link>
      </p>
      <Link href={"https://www.github.com/benceszalaiii/word-ui/fork"} className="font-geist">Open source and ready to fork</Link>
    </footer>
  );
}
