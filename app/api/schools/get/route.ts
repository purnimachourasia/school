import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import type { RowDataPacket } from "mysql2"; // ✅ import

interface SchoolRow extends RowDataPacket {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  image: string | null;
}

export async function GET() {
  try {
    const [rows] = await pool.query<SchoolRow[]>(
      "SELECT id, name, address, city, state, contact, email_id, image FROM schools"
    );

    const formatted = rows.map((row) => ({
      ...row,
      image: row.image ? `data:image/jpeg;base64,${row.image}` : null,
    }));

    return NextResponse.json(formatted);
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("GET Error:", errMsg);
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
