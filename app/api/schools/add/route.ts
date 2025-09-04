import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import type { ResultSetHeader } from "mysql2"; // ✅ import this

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const city = formData.get("city") as string;
    const state = formData.get("state") as string;
    const contact = formData.get("contact") as string;
    const email_id = formData.get("email_id") as string;

    const file = formData.get("image") as File | null;
    let imageBase64: string | null = null;
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      imageBase64 = buffer.toString("base64");
    }

    // ✅ ResultSetHeader gives correct typing for insert
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, imageBase64]
    );

    return NextResponse.json({ success: true, id: result.insertId });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Insert Error:", errMsg);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

