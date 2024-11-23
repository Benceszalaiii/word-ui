"use client";
import Link from "next/link";
import CodeBlock from "../../../../components/code";
import {
  DocsContent,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "../../../../components/docs";
import CursorGlow from "../../../../components/previews/cursor-glow";
import CursorWrapper from "../../../../components/previews/cursor-wrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const code = `
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
        \`relative mt-8 flex w-full max-w-screen-md flex-col items-center 
        justify-center gap-4 rounded-lg border border-border 
        bg-opacity-10 p-8 backdrop-blur-lg
        md:gap-8 md:overflow-hidden\`,
        className
      )}
    >
      <legend
        about="Legend"
        className={\`self-start text-lg font-semibold text-opacity-75 
        select-none -z-10 text-black/75 animate-in dark:text-white/75\`}
      >
        {title}
      </legend>

      {children}
    </section>
  );
}

`;

const usage = `
export default function Page(){
return (
        {/*  Use either a HEX value or a CSS builtin color name */}
        <CursorWrapper title="Cursor Wrapper" cursorColor="red"> 
            The cursor will be red in this section
        </CursorWrapper>
    )
}
`;

export default function Page() {
  return (
    <DocsPage>
      <CursorGlow />
      <DocsTitle>Cursor Glow</DocsTitle>
      <DocsDescription>
        Use with{" "}
        <Link
          href={"/components/cursor-glow"}
          className="underline underline-offset-2"
        >
          Cursor Glow
        </Link>{" "}
        to create color changing cursor glow.
      </DocsDescription>
      <DocsContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <CursorWrapper title="Cursor Wrapper" cursorColor="red">
              The cursor will be red in this section
            </CursorWrapper>
          </TabsContent>
          <TabsContent value="code">
            <DocsTitle size="lg" className="pb-1 mb-4">
              Dependencies
            </DocsTitle>
            <DocsDescription>
              Requires{" "}
              <Link
                href={`/hooks/use-cursor-theme`}
                className="underline underline-offset-2"
              >
                useCursorTheme
              </Link>{" "}
              hook
            </DocsDescription>
            <CodeBlock
              language="tsx"
              filename="components/cursor-wrapper.tsx"
              code={code}
            />
          </TabsContent>
        </Tabs>
        <DocsTitle size="2xl" className="mt-12">
          Usage
        </DocsTitle>
        <DocsDescription>
          You can use the <span className="inline-code">title</span> parameter
          to add a title to the section.
        </DocsDescription>
        <DocsDescription>
          To set the cursor&apos;s color, use the{" "}
          <span className="inline-code">cursorColor</span> parameter.
        </DocsDescription>
        <CodeBlock language="tsx" filename="page.tsx" code={usage} />
      </DocsContent>
    </DocsPage>
  );
}
