"use client";
import { useIsMobile } from "../../hooks/use-mobile";
import { AppSidebar } from "../../components/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {isMobile && <SidebarTrigger className="sticky z-40 transition-all top-20" />}
        {children}
      </main>
    </SidebarProvider>
  );
}
