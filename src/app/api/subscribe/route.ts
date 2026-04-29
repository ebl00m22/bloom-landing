import { NextResponse } from "next/server";

const FORM_IDS: Record<string, number> = {
  contact_form: 9384718,
  social_media_lp: 9384725,
  executive_linkedin_lp: 9384728,
};

const SOURCE_LABELS: Record<string, string> = {
  contact_form: "Contact Form",
  social_media_lp: "Social Media LP",
  executive_linkedin_lp: "Executive LinkedIn LP",
};

export async function POST(request: Request) {
  try {
    const { name, email, company, source, extra } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const firstName = name?.split(" ")[0] ?? "";
    const formId = FORM_IDS[source] ?? 9384718;

    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.KIT_API_KEY,
        email,
        first_name: firstName,
        fields: {
          company: company ?? "",
          source: SOURCE_LABELS[source] ?? source ?? "Website",
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
