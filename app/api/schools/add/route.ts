import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const contact = formData.get("contact") as string;
    const email_id = formData.get("email_id") as string;

    const file = formData.get("image") as File;
    let imageBase64 = null;
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      imageBase64 = buffer.toString("base64");
    }

    const [result] = await pool.query(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, imageBase64]
    );

    return NextResponse.json({ success: true, id: (result as any).insertId });
  } catch (error: any) {
    console.error("Insert Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
