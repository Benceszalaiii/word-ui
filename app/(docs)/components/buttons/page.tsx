import CodeBlock from "@/components/code";
import {
  DocsContent,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "@/components/docs";
import CursorGlow from "@/components/previews/cursor-glow";
import CursorWrapper, { Section } from "@/components/previews/cursor-wrapper";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const variantsCode = `
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cursor: "bg-background border rounded-lg border-border hover:bg-background/35 hover:backdrop-blur-md hover:border-cursor transition-[border] duration-500",
        expandIcon:
          "group relative text-primary-foreground bg-primary hover:bg-primary/90",
        ringHover:
          "bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
        shine:
          "text-primary-foreground animate-shine bg-gradient-to-r from-primary via-primary/75 to-primary bg-[length:400%_100%] ",
        gooeyRight:
          "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",
        gooeyLeft:
          "text-primary-foreground relative bg-primary z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
        linkHover1:
          "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
        linkHover2:
          "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

`;

export default function Page() {
  return (
    <DocsPage>
      <DocsTitle main>Button styles</DocsTitle>
      <DocsContent>
        <DocsDescription>
          These styles use{" "}
          <Link
            className="underline underline-offset-2"
            href={"https://ui.shadcn.com/docs/components/button"}
          >
            shadcn-ui
          </Link>{" "}
          by{" "}
          <Link
            className="underline underline-offset-2"
            href={"https://github.com/shadcn"}
          >
            shadcn
          </Link>{" "}
          and{" "}
          <Link
            className="underline underline-offset-2"
            href={"https://enhanced-button.vercel.app"}
          >
            Enhanced Button
          </Link>{" "}
          by{" "}
          <Link
            className="underline underline-offset-2"
            href={"https://github.com/jakobhoeg"}
          >
            jakobhoeg
          </Link>
          .
        </DocsDescription>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="code">
            <DocsDescription>
              You need nothing more than to refactor
              <span className="inline-code">components/ui/button.tsx</span>{" "}
              according to{" "}
              <Link
                className="underline underline-offset-2"
                href={"https://enhanced-button.vercel.app"}
              >
                jakobhoeg
              </Link>
              .
            </DocsDescription>
            <DocsDescription className="mt-8">
              Then replace buttonVariants with the following code:
            </DocsDescription>
            <CodeBlock
              code={variantsCode}
              language="tsx"
              filename="components/ui/button.tsx"
            />
            <DocsDescription>
              You are ready to use this component!
            </DocsDescription>
          </TabsContent>
          <TabsContent value="preview">
            <Section title="Preview">
              <Button variant={"cursor"} className="">
                Button with no cursor modifier
              </Button>
              <CursorWrapper color="50 250 50">
                <Button variant={"cursor"}>Green button</Button>
              </CursorWrapper>
            </Section>
          </TabsContent>
        </Tabs>
        <DocsTitle size="2xl">Usage</DocsTitle>
        <CodeBlock
          language="tsx"
          filename="app/page.tsx"
          code={`
            export default function Page() {
                return (
                <>
                    {/* Without custom color */}
                    <Button variant={"cursor"}>
                        Click me
                    </Button>

                    {/* With custom color */}
                    <CursorWrapper color="50 250 50">
                    <Button variant={"cursor"}>
                        Click me
                    </Button>
                    </CursorWrapper>
                </>
            )
        }
            `}
        />
        <CursorGlow />
      </DocsContent>
    </DocsPage>
  );
}
