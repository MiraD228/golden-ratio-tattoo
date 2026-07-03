import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password !== "12345") {
    return NextResponse.json(
      { error: "Неверный пароль" },
      { status: 401 }
    );
  }

  const res = NextResponse.json({ success: true });

  res.cookies.set("admin-auth", "true", {
    httpOnly: true,
    path: "/",
  });

  return res;
}