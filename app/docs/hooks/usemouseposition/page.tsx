import CodeBlock from "../../../../components/code";
import {
  DocsContent,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "../../../../components/docs";

const code = `
import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e: MouseEvent) =>{
            setPosition({ x: e.clientX, y: e.clientY});
        }
        window.addEventListener("mousemove", setFromEvent);
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};

`;
const usage = `
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
        animate={{ x: mousePos.x - 56, y: mousePos.y - 56 }}
        transition={{ duration: 0.2, ease: "easeOut", stiffness: 100 }}
      />
    </div>
  );
}
`;
export default function Page() {
  return (
    <DocsPage>
      <DocsTitle>useMousePosition</DocsTitle>
      <DocsContent>
        <DocsDescription>Used to get the cursor&apos;s position</DocsDescription>

        <DocsTitle size="2xl" className="text-start mb-2 pb-2 mt-12">
          Source code
        </DocsTitle>
        <CodeBlock
          code={code}
          language="tsx"
          filename="hooks/use-mouseposition.ts"
        />
        <DocsTitle size="2xl" className="text-start mb-2 pb-2 mt-16">
          Usage
        </DocsTitle>
        <div className="self-start mx-4">
          <DocsDescription>
            Returns with <span className="inline-code">mousePos</span>: An
            object containing the X and Y coordinates of the mouse.
          </DocsDescription>
        </div>
        <CodeBlock
          language="tsx"
          filename="components/cursor-glow.tsx"
          code={usage}
        />
        <div className="h-32" />
      </DocsContent>
    </DocsPage>
  );
}
