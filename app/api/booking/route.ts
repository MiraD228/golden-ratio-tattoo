import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { name, phone, message } = await request.json();

  if (!name || !phone) {
    return Response.json(
      { error: "Имя и телефон обязательны" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("bookings").insert({
    name,
    phone,
    message,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}