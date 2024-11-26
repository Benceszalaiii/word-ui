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
  emoji?: string;
  children?: SidebarItem[];
};
type SidebarGroup = {
  name: string;
  prefix: string;
  emoji?: string;
  subItems: SidebarItem[];
};

const items: SidebarGroup[] = [
  {
    name: "Getting Started",
    emoji: "🚀",
    prefix: "/getting-started",
    subItems: [
      {
        title: "Introduction",
        href: "/introduction",
        emoji: "👋",
      },
      {
        title: "Installation",
        href: "/installation",
        emoji: "⚙️",
      },
    ],
  },
  {
    name: "Components",
    emoji: "🧩",
    prefix: "/components",
    subItems: [
      {
        title: "Cursor Glow",
        emoji: "🌟",
        href: "/cursor-glow",
      },
      {
        title: "Cursor Wrapper",
        href: "/cursor-wrapper",
        emoji: "🎁"
      },
      {
        title: "Button styles",
        href: "/buttons",
        emoji: "🎨",
      },
      {
        title: "Tilt Card",
        href: "/tilt-card",
        emoji: "🃏",
      }
    ],
  },
  {
    name: "Hooks",
    emoji: "🪝",
    prefix: "/hooks",
    subItems: [
      {
        title: "useCursorTheme",
        href: "/use-cursor-theme",
        emoji: "🌈",
      },
      {
        title: "useMousePosition",
        href: "/use-mouse-position",
        emoji: "🖱️",
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
      <SidebarContent className="pt-16 font-inter">
        {items.map((item) => {
          return (

            <CollapsibleMenu emoji={item.emoji} key={item.name} title={item.name}>
              {item.subItems.map((subItem) => {
                return (
                  <SidebarMenuSubItem
                    key={subItem.href}
                    className={
                      path === item.prefix + subItem.href
                        ? "underline underline-offset-4 cursor-pointer py-2 font-bold"
                        : "cursor-pointer py-2"
                    }
                    onClick={() => {
                      router.push(item.prefix + subItem.href);
                      setOpenMobile(false);
                    }}
                  >
                    {subItem.emoji}
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
  emoji
}: {
  title: string;
  emoji?: string;
  children: React.ReactNode;
}) {
  return (
    <SidebarMenu>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton className="font-semibold text-base">
              {emoji}{title}
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
