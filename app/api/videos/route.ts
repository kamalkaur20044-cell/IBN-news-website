import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT
        id,
        title,
        description,
        video_type,
        youtube_id,
        video_path,
        thumbnail,
        duration,
        published_at
      FROM videos
      ORDER BY published_at DESC
    `);

    return NextResponse.json({
      success: true,
      videos: rows,
    });
  } catch (error) {
    console.error("Videos error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch videos",
      },
      { status: 500 }
    );
  }
}