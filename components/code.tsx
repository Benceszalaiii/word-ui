"use client";

import { CodeBlock as Block } from "react-code-block";

import { ClipboardIcon } from "lucide-react";
import { inter } from "../app/fonts";

import { useCopyToClipboard } from "react-use";
import { toast } from "sonner";
import { Button } from "./ui/button";
function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename?: string;
}) {
  const [, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    copyToClipboard(code);
  };
  return (
    <Block code={code} language={language}>
      <div className="relative border select-text overflow-scroll rounded-xl max-w-screen-lg max-h-96">
        <div className="sticky top-0 flex flex-row justify-between left-0 w-full bg-gray-200 dark:bg-neutral-950">

        {filename && (
          <p
          className={`p-2 text-sm ${inter.className} antialiased`}
          >
            {filename}
          </p>
        )}
        
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-br-none"
          onClick={() => {
            copyCode();
            toast.info("Code copied to clipboard", { icon: "📋" });
          }}
          >
          <ClipboardIcon className="h-4 w-4" />
        </Button>
          </div>
        <Block.Code
          className={`bg-white/50 dark:bg-neutral-900/75 p-6 shadow-lg`}
        >
          <div className="table-row">
            <Block.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />

            <Block.LineContent className="table-cell">
              <Block.Token />
            </Block.LineContent>
          </div>
        </Block.Code>

      </div>
    </Block>
  );
}

export default CodeBlock;
