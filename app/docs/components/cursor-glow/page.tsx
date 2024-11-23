"use client";
import CodeBlock from "@/components/code";
import {
  DocsContent,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "@/components/docs";
import CursorGlow from "@/components/previews/cursor-glow";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const code = `
import { useIsMobile } from "@/hooks/use-mobile";
import { useMousePosition } from "@/hooks/use-mouseposition";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const mousePos = useMousePosition();
  const isMobile = useIsMobile();
  return (
    <div
      className={\`fixed left-0 top-0 -z-10 h-screen w-screen overflow-hidden\`}
    >
      <motion.div
        hidden={isMobile || (mousePos.x === 0 && mousePos.y === 0)}
        className={\`bg-cursor fixed h-28 w-28 rounded-xl opacity-55 blur-2xl transition-colors duration-700\`}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ duration: 0.2, ease: "easeOut", stiffness: 100 }}
      />
    </div>
  );
}
`;

export default function Page() {
  return (
    <DocsPage>
      <CursorGlow />
      <DocsTitle>Cursor Glow</DocsTitle>
      <DocsContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <DocsDescription>
              Hover around the screen to preview
            </DocsDescription>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock language="tsx" filename="components/cursor-glow.tsx" code={code} />
          </TabsContent>
        </Tabs>
        <DocsTitle className="mt-16">Usage</DocsTitle>
        <DocsDescription>
          Include <span className="inline-code">--cursor</span> in your{" "}
          <span className="inline-code">global.css</span> file.
        </DocsDescription>
        <CodeBlock
          language="css"
          filename="global.css"
          code={`
@layer base {
  :root {
    --cursor: #5b21b6;
        }
      }
`}
        />
      <DocsDescription> Add cursor to your <span className="inline-code">tailwind.config.ts</span> file</DocsDescription>
      <CodeBlock language="typescript" filename="tailwind.config.ts" code={`
  theme: {
    extend: {
      colors: {
        cursor: "var(--cursor)",
        `} />
        </DocsContent>
    </DocsPage>
  );
}
