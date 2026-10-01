import db from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const [rows] = await db.query(`
            SELECT id,title,slug
            FROM news 
            where status ='published'
            ORDER BY published_at DESC
            LIMIT 10
            `);
        
            return NextResponse.json({
                success:true,
                news:rows,
            })

    }catch(error){
        console.error("ticke news error ",error);
        return NextResponse.json({
            success:false,
            message:"Failed to fetch ticker news",
        },{status:500});
    }
}