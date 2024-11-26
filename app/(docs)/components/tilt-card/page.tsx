"use client";
import { TiltCard } from "components/previews/tilt-card";
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
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as React from "react";

type Variant = {
    wrapper: string;
    content: string;
    title: string;
    value: string;
    unit: string;
    splash: string;
    color: string;
};

type colorKeys = "orange" | "emerald" | "sky";

type colorVariantProps = {
    [key in colorKeys]: Variant;
};

const colorVariants: colorVariantProps = {
    emerald: {
        color: "#047857",
        wrapper:
            "hover:from-lime-500 hover:to-emerald-500 hover:shadow-emerald-500 dark:to-emerald-800 from-emerald-500 to-lime-600",
        content:
            "from-gray-200 via-white via-50% to-white dark:from-gray-800 dark:via-dark dark:to-slate-900",
        title: "text-emerald-700",
        value: "text-emerald-700",
        unit: "text-emerald-700",
        splash: "from-emerald-500 to-emerald-800",
    },
    orange: {
        color: "#c2410c",
        wrapper:
            "hover:from-orange-500 hover:to-red-500 hover:shadow-orange-500 dark:to-red-800 from-red-500 to-orange-600",
        content:
            "from-gray-200 via-white via-50% to-white dark:from-gray-800 dark:via-dark dark:to-slate-900",
        title: "text-orange-700",
        value: "text-orange-700",
        unit: "text-orange-700",
        splash: "from-orange-500 to-red-800",
    },
    sky: {
        color: "#0369a1",
        wrapper:
            "hover:from-sky-500 hover:to-violet-500 hover:shadow-sky-500 dark:to-sky-800 from-violet-500 to-sky-600",
        content:
            "from-gray-200 via-white via-50% to-white dark:from-gray-800 dark:via-dark dark:to-slate-900",
        title: "text-sky-700",
        value: "text-sky-700",
        unit: "text-sky-700",
        splash: "from-sky-500 to-sky-800",
    },
};


export function TiltCard({
    title,
    value,
    unit,
    colorVariant = "orange"
}: {
    title: string;
    value: number | string;
    unit?: string;
    colorVariant?: colorKeys;
}) {
    const currentVariant = colorVariants[colorVariant];
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSprint = useSpring(x, { stiffness: 800, damping: 90 });
    const mouseYSprint = useSpring(y, { stiffness: 800, damping: 90 });
    const rotateX = useTransform(
        mouseXSprint,
        [-0.5, 0.5],
        ["-15deg", "15deg"],
    );
    const rotateY = useTransform(
        mouseYSprint,
        [-0.5, 0.5],
        ["15deg", "-15deg"],
    );
    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPercentage = mouseX / width - 0.5;
        const yPercentage = mouseY / height - 0.5;
        x.set(xPercentage);
        y.set(yPercentage);
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-name="Wrapper"
            style={{ rotateY: rotateX, rotateX: rotateY }}
            className={
                "group/card pointer relative mb-8 h-64 w-full transform-gpu select-none rounded-lg bg-opacity-90 bg-gradient-to-tr p-1 shadow-lg transition-shadow duration-500 md:w-48 " +
                currentVariant.wrapper
            }
        >
            <motion.div
                data-name="Content"
                className={
                    "flex h-full w-full flex-col items-center justify-center gap-8 rounded-lg bg-gradient-to-tl via-50% p-2 " +
                    currentVariant.content
                }
            >
                <h4
                    className={\`z-20 mt-4 w-full text-center text-2xl  font-semibold\`}
                >
                    {title}
                </h4>
                <motion.div
                    className={
                        "absolute bottom-8 right-4 ml-12 h-32 w-32 rounded-full bg-gradient-to-tr opacity-20 shadow-lg blur-2xl"
                    }
                />
                <p className="z-20 mb-auto mr-4">
                    <span
                        className={\`transform-gpu text-5xl font-semibold antialiased transition-all group-hover/card:scale-125 \`}
                    >
                        {value}
                    </span>{" "}
                    <br />
                </p>
                <p
                    className={\`mb-8 mr-4 self-end justify-self-end  tracking-widest\`}
                >
                    {unit || ""}
                </p>
            </motion.div>
        </motion.div>
    );
}

`;

const usage = `
export default function Page(){
  return (
    <TiltCard
        title="Orange"
        value={1}
        unit="units"
        colorVariant="orange"
        />
    )
}
`;

export default function Page() {
  return (
    <DocsPage>
      <CursorGlow />
      <DocsTitle main>Tilt Card</DocsTitle>
      <DocsContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <Section
              title="Tilt Card variants"
              className="flex pt-12 md:flex-row flex-col items-center justify-center gap-4 md:overflow-x-scroll"
            >
              <TiltCard
                title="Orange"
                value={1}
                unit="units"
                colorVariant="orange"
              />
              <TiltCard
                title="Sky"
                value={2}
                unit="units"
                colorVariant="sky"
              />
              <CursorWrapper color="0 255 0">
                <TiltCard
                  title="Emerald"
                  value={3}
                  unit="units"
                  colorVariant="emerald"
                />
              </CursorWrapper>
            </Section>
            <DocsDescription>
              You can use{" "}
              <Link
                href={"/components/cursor-wrapper"}
                className="underline underline-offset-2"
              >
                Cursor Wrapper
              </Link>{" "}
              with it.{" "}
              <span className="italic text-gray-500">See emerald card above</span>
            </DocsDescription>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              language="tsx"
              filename="components/tilt-card.tsx"
              code={code}
            />
          </TabsContent>
        </Tabs>
        <DocsTitle size="2xl" className="mt-12">
          Usage
        </DocsTitle>
        <DocsDescription>
          Wrap it in a <span className="inline-code">CursorWrapper</span> for
          cursor effects.
        </DocsDescription>
        <CodeBlock language="tsx" filename="page.tsx" code={usage} />
      </DocsContent>
    </DocsPage>
  );
}
