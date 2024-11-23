"use client";

import { CodeBlock as Block } from "react-code-block";

import { inter } from "../app/fonts";
import { ClipboardIcon } from "lucide-react";

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
    // Logic to copy `code`

    copyToClipboard(code);
    toast.success("Code copied to clipboard");
  };

  return (
    <Block code={code} language={language}>
      <div className="relative">
        {filename && (
          <p
            className={`absolute top-0 left-0 rounded-t-xl w-full p-2 border bg-neutral-950 text-sm ${inter.className} antialiased`}
          >
            {filename}
          </p>
        )}
        <Block.Code className={`bg-white/75 dark:bg-neutral-900/75 overflow-x-scroll p-6 ${filename && "pt-12"} rounded-xl shadow-lg`}>
          <div className="table-row">
            <Block.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />

            <Block.LineContent className="table-cell">
              <Block.Token />
            </Block.LineContent>
          </div>
        </Block.Code>

        <Button
          variant={"ghost"}
          size={"icon"}
          className="absolute top-0 right-0 rounded-br-none"
          onClick={copyCode}
        >
          <ClipboardIcon className="h-4 w-4" />
        </Button>
      </div>
    </Block>
  );
}

export default CodeBlock;
