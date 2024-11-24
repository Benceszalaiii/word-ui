import {
  DocsContent,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "../../../../components/docs";
import PmCopy from "../../../../components/pm-copy";

export default function Page() {
  return (
    <DocsPage>
      <DocsTitle main>Installation</DocsTitle>
      <DocsContent>
        <DocsDescription>
          Everything you need to use these components
        </DocsDescription>
        <DocsTitle size="2xl" className="mt-16">
          Install dependencies
        </DocsTitle>
        <DocsDescription className="px-4 md:px-16">
          <PmCopy text="framer-motion shadcn@latest tailwindcss" />
        </DocsDescription>
        <DocsTitle size="2xl" className="mt-16">
          Initialize shadcn
        </DocsTitle>
        <DocsDescription className="px-4 md:px-16">
          <PmCopy text="shadcn@latest init" x />
        </DocsDescription>
        <DocsTitle size="4xl" className="mt-24">
          You are set to go!
        </DocsTitle>
        <DocsDescription>
          You can start using WordUI components.
        </DocsDescription>
      </DocsContent>
    </DocsPage>
  );
}
