import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request:Request){
  try{
    const {searchParams} = new URL(request.url);
    const query =searchParams.get("q");

    if(!query || query.trim()===""){
        return NextResponse.json({
            success:true,
            news:[],
        });
    }

    const search_term =`%${query.trim()}%` ;

    const [rows] = await db.query(`
           SELECT id,title,slug,excerpt,image,author,read_time,published_at
           FROM news
           where status ="published"
           And (
             title LIKE ?
             OR excerpt LIKE ?
             OR content LIKE ?
           )
           ORDER BY published_at DESC;
        `,[search_term,search_term,search_term]);

        return NextResponse.json({
            success:true,
            news:rows,
        })

  } catch(error){
    console.log("search error:",error);
    return NextResponse.json({
        success:false,
        message:'failed to search news',
    },{status:500});
  }
} 
