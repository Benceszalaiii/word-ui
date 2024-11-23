"use client";

import { ClipboardIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useCopyToClipboard } from "react-use";

export default function PmCopy({ text, x }: { text: string; x?: boolean }) {
    const [, copyToClipboard] = useCopyToClipboard();
    const copyClipboard = (pm: string) => {
    if (x) {
      copyToClipboard(pm + text);
    }
    copyToClipboard(pm + text);
  };

  if (x) {
    return (
      <div className="rounded-2xl bg-neutral-300 flex flex-row justify-between px-4 py-2 items-center border border-border w-full dark:bg-neutral-800">
        <p className="font-mono">npx {text}</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <ClipboardIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => copyClipboard("npx ")}>
              npx
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copyClipboard("pnpm dlx ")}>
              pnp dlx
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copyClipboard("npx ")}>
              yarn
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => copyClipboard("bunx --bun ")}>
                bun
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-neutral-300 flex flex-row justify-between px-4 py-2 items-center border border-border w-full dark:bg-neutral-800">
      <p className="font-mono">npm install {text}</p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <ClipboardIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => copyClipboard("npm install ")}>
              npm
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => copyClipboard("pnpm add ")}>
              pnpm
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => copyClipboard("yarn add ")}>
              yarn
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => copyClipboard("bun add ")}>
              bun
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
