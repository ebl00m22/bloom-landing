import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, source, extra } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const res = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.KIT_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        first_name: name?.split(" ")[0] ?? "",
        state: "active",
        fields: {
          last_name: name?.split(" ").slice(1).join(" ") ?? "",
          company: company ?? "",
          source: source ?? "website",
          ...extra,
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Kit API error:", err);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
