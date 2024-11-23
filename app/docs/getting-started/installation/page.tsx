import {
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "../../../../components/docs";
import PmCopy from "../../../../components/pm-copy";

export default function Page() {
  return (
    <DocsPage>
      <DocsTitle>Installation</DocsTitle>
      <DocsDescription>
        Everything you need to use these components
      </DocsDescription>
      <DocsTitle size="2xl" className="mt-16">
        Install dependencies
      </DocsTitle>
      <PmCopy text="framer-motion shadcn@latest tailwindcss" />
      <DocsTitle size="2xl" className="mt-16">
        Initialize shadcn
      </DocsTitle>
      <PmCopy text="shadcn@latest init" x />
      <DocsTitle size="4xl" className="mt-24">
        You are set to go!
      </DocsTitle>
      <DocsDescription>You can start using WordUI components.</DocsDescription>
    </DocsPage>
  );
}
