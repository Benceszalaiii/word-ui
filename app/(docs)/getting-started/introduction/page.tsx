import DocsTitle from "@/components/docs/title";
import { DocsContent, DocsPage } from "components/docs";
import Link from "next/link";
import DocsDescription from '../../../../components/docs/description';

export default function Page() {
  return (
    <DocsPage>
      <DocsTitle main>Introduction</DocsTitle>
      <DocsContent>
        <DocsDescription>
          WordUI is a React based component library using{" "}
          <span className="inline-code">framer-motion</span> and{" "}
          <span className="inline-code">shadcn</span>
        </DocsDescription>
        <DocsDescription>
          To install these dependencies, check out our{" "}
          <Link
            className="underline underline-offset-2"
            href={"/getting-started/installation"}
          >
            Installation guide
          </Link>
        </DocsDescription>
        <DocsTitle>WordUI is free of charge for any purpose</DocsTitle>
        <DocsDescription>Just like shadcn, feel free to use this library anywhere without any copyright, mention, etc. Leave a comment on our <Link href={"https://github.com/Benceszalaiii/word-ui/discussions/new/choose"}>GitHub Discussions</Link> to show what awesome project you&apos;re working on, we will be happy to see your creations.  </DocsDescription>
        <DocsDescription><Link className="underline underline-offset-2" href={"/components/cursor-glow"}>Cursor Glow</Link> is a good place to start exploring WordUI.</DocsDescription>
      </DocsContent>
    </DocsPage>
  );
}
