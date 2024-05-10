import { NextResponse, NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  const payload = await req.text();

  const sig = req.headers.get("Stripe-Signature");

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    if (event.type === "charge.succeeded") {
      const userEmail = event.data.object.billing_details.email;
      const user = await db.user.findFirst({
        where: {
          email: userEmail,
        },
      });

      if (!user) {
        return NextResponse.json({
          status: "Failed",
          error: "User not found",
        });
      }

      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          premium: true,
        },
      });

      return NextResponse.json({
        status: 200,
        ok: true,
        message: "User updated to premium successfully",
      });
    }

    return NextResponse.json({
      status: 200,
      ok: true,
      message: "Webhook event processed successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      ok: true,
      message: "Error processing webhook event",
    });
  }
}
