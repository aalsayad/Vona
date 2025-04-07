import { ContactTemplate } from "../../../components/email/ContactTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, budget, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Update with your verified domain
      to: ["ahmed@vona.sa"],
      cc: ["ahmed@vona.sa"],
      subject: "New Contact Form Submission",
      react: React.createElement(ContactTemplate, {
        name,
        email,
        budget,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
