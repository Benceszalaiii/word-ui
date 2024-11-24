"use client";
import { Button } from "components/ui/button";
import Link from "next/link";
import CodeBlock from "../../../../components/code";
import {
  DocsContent,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "../../../../components/docs";
import CursorGlow from "../../../../components/previews/cursor-glow";
import CursorWrapper, {
  Section,
} from "../../../../components/previews/cursor-wrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

const code = `
"use client";

import useCursorTheme from "hooks/use-cursor-theme";
import React from "react";

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
`;

const usage = `
export default function Page(){
  return (
      {/*  Use rgb for color, without brackets*/}
      <CursorWrapper color="255 0 0">
        <Section title="Custom Section">
          The cursor will be red in this section
        </Section>
      </CursorWrapper>
    )
}
`;

export default function Page() {
  return (
    <DocsPage>
      <CursorGlow />
      <DocsTitle main>Cursor Wrapper</DocsTitle>
      <DocsContent>
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
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <CursorWrapper color="255 0 0">
              <Section title="Custom Section" className="h-64">
                The cursor will be red in this section
              </Section>
            </CursorWrapper>
            <Section title="Shadcn button with glow" className="h-64">
              <CursorWrapper color="10 100 255">
                <Button variant={"secondary"}>Hover me</Button>
              </CursorWrapper>
            </Section>
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
