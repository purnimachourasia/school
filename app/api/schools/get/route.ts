import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, address, city, state, contact, email_id, image FROM schools"
    );

    const formatted = (rows as any[]).map((row) => ({
      ...row,
      image: row.image ? `data:image/jpeg;base64,${row.image}` : null,
    }));

    return NextResponse.json(formatted); // always array
  } catch (error: any) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
