"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/app-sidebar';
import { useIsMobile } from "hooks/use-mobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {isMobile && <SidebarTrigger className="sticky top-16" />}
        {children}
      </main>
    </SidebarProvider>
  );
}
