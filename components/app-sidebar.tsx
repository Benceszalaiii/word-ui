/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";

type SidebarItem = {
  title: string;
  href: string;
  children?: SidebarItem[];
};
type SidebarGroup = {
  name: string;
  prefix: string;
  subItems: SidebarItem[];
};

const items: SidebarGroup[] = [
  {
    name: "Getting Started",
    prefix: "/getting-started",
    subItems: [
      {
        title: "Installation",
        href: "/installation",
      },
    ],
  },
  {
    name: "Components",
    prefix: "/components",
    subItems: [
      {
        title: "Cursor Glow",
        href: "/cursor-glow",
      },
      {
        title: "Cursor Wrapper",
        href: "/cursor-wrapper",
      },
    ],
  },
  {
    name: "Hooks",
    prefix: "/hooks",
    subItems: [
      {
        title: "useCursorTheme",
        href: "/usecursortheme",
      },
      {
        title: "useMousePosition",
        href: "/usemouseposition",
      },
    ],
  },
];

export function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="pt-16">
        {items.map((item) => {
          return (
            <CollapsibleMenu key={item.name} title={item.name}>
              {item.subItems.map((subItem) => {
                return (
                  <SubLink
                    key={subItem.href}
                    active={path === item.prefix + subItem.href}
                    href={"/docs" + item.prefix + subItem.href}
                  >
                    {subItem.title}
                  </SubLink>
                );
              })}
            </CollapsibleMenu>
          );
        })}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

function CollapsibleMenu({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <SidebarMenu>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="font-semibold text-base">
              {title}
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>{children}</SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  );
}

function SubLink({
  href,
  children,
  active,
}: {
  active?: boolean;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <SidebarMenuSubItem>
      <Link
        href={href}
        className={active ? "underline underline-offset-2 font-bold" : ""}
      >
        {children}
      </Link>
    </SidebarMenuSubItem>
  );
}
