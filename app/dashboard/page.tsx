import DashboardContent from "@/components/DashboardContent";

// Force dynamic rendering to avoid client module prerender issues
export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  return <DashboardContent />;
}
