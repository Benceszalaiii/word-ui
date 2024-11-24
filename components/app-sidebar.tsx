/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
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
      {
        title: "Tilt Card",
        href: "/tilt-card"
      }
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
  const router = useRouter();
  const {setOpenMobile} = useSidebar();
  return (
    <Sidebar>
      <SidebarContent className="pt-16">
        {items.map((item) => {
          return (
            <CollapsibleMenu key={item.name} title={item.name}>
              {item.subItems.map((subItem) => {
                return (
                  <SidebarMenuSubItem
                    key={subItem.href}
                    className={
                      path === item.prefix + subItem.href
                        ? "underline underline-offset-2 cursor-pointer font-bold"
                        : "cursor-pointer"
                    }
                    onClick={() => {
                      router.push(item.prefix + subItem.href);
                      setOpenMobile(false);
                    }}
                  >
                    {subItem.title}
                  </SidebarMenuSubItem>
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
