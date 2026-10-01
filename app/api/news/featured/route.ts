import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){

    try{
        const [rows]=await db.query(`
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
               WHERE is_featured =TRUE
               AND status ='published'
               ORDER BY published_at DESC
            `);
            return NextResponse.json({
                sucess:true,
                news:rows,
            });
    }catch(error){
        console.log("featured news error:" ,error);
        return NextResponse.json({
            success:false,
            message: "Failed to fetch featured news",
        },{status:500});
    }
}