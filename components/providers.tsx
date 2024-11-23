"use client";

import { useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";

export default function Providers() {
  const { resolvedTheme } = useTheme();
  return (
      <Toaster richColors theme={resolvedTheme as ToasterProps["theme"]} />
  );
}
