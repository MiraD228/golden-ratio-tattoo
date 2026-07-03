import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import AdminContent from "@/components/AdminContent";
import AdminLogin from "@/components/AdminLogin";

export default async function AdminPage() {
  const auth = (await cookies()).get("admin-auth");

  if (!auth) {
    return <AdminLogin />;
  }

  const { data: bookings } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  return <AdminContent bookings={bookings || []} />;
}