import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/app-sidebar';

export default function NotFound() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <section><h1>404</h1>
        <p>The requested page does not exist.</p>
        </section>
      </main>
    </SidebarProvider>
  );
}
