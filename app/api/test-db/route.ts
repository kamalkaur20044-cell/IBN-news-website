import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT id, name, slug FROM categories ORDER BY name ASC"
    );

    return NextResponse.json({
      success: true,
      categories: rows,
    });
  } catch (error: any) {
    console.error("Categories error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
        code: error.code,
        sqlMessage: error.sqlMessage,
      },
      { status: 500 }
    );
  }
}