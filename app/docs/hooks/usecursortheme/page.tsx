import CodeBlock from "@/components/code";
import { DocsContent, DocsDescription, DocsPage, DocsTitle } from "@/components/docs";

const code = `
import { useEffect, useState } from "react";

export default function useCursorTheme() {
    const [defaultTheme, setDefaultTheme] = useState("");
    const [theme, setTheme] = useState(
        defaultTheme,
    );
    const setCursorDefault = () => {
        setTheme(defaultTheme);
    };
    useEffect(()=> {
        const defaulttheme = getComputedStyle(document.documentElement).getPropertyValue("--cursor");
        setDefaultTheme(defaulttheme);
        setTheme(defaulttheme);
    }, [defaultTheme])

    useEffect(() => {
            const root = window.document.documentElement;
            root.style.setProperty("--cursor", theme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [theme]);
    return { theme, setTheme, setCursorDefault, defaultTheme };
}
`;
const usage = `
export default function ComponentWithCursor({ cursorColor } : {cursorColor?: string}) {
    const { setTheme, setCursorDefault, defaultTheme } = useCursorTheme();
    return (
        <div
            onMouseEnter={() => {
                setTheme(cursorColor || defaultTheme);
            }}
            onMouseLeave={setCursorDefault} />
`
export default function Page() {
  return (
    <DocsPage>
      <DocsTitle>useCursorTheme</DocsTitle>
      <DocsContent>
        <DocsDescription>Used to get the current cursor theme and modify it</DocsDescription>

        <DocsTitle size="2xl" className="text-start mb-2 pb-2 mt-12">Source code</DocsTitle>
        <CodeBlock code={code} language="tsx" filename="hooks/use-cursor-theme.ts"/>
        <DocsTitle size="2xl" className="text-start mb-2 pb-2 mt-16">Usage</DocsTitle>
        <div className="self-start mx-4">
        <DocsDescription ><span className="inline-code">theme</span>: The current color applied to the cursor</DocsDescription>
        <DocsDescription ><span className="inline-code">setTheme</span>: Current color setter. Values are to be HEX colors.</DocsDescription>
        <DocsDescription ><span className="inline-code">setCursorDefault</span>: Sets the cursor color back to default.</DocsDescription>
        <DocsDescription><span className="inline-code">defaultTheme</span>: The default color applied to the cursor</DocsDescription>
        </div>
        <CodeBlock language="tsx" code={usage} filename="components/componentwithcursor.tsx" />
        <div className="h-32"/>
      </DocsContent>
    </DocsPage>
  );
}
