import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        id,
        title,
        slug,
        excerpt,
        image,
        author,
        read_time,
        published_at
      FROM news
      WHERE status = 'published'
      ORDER BY published_at DESC
    `);

    return NextResponse.json({
      success: true,
      news: rows,
    });
  } catch (error) {
    console.error("Latest news error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch latest news",
      },
      { status: 500 }
    );
  }
}