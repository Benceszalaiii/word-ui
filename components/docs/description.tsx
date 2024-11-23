import clsx from "clsx"

export default function DocsDescription({ children, className }: {className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx("docs-description", className)}>
      {children}
    </div>
  );
}