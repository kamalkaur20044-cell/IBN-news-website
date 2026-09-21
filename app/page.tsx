import FeaturedNews from "@/components/FeaturedNews";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";
import { Original_Surfer } from "next/font/google";

const originalSurfer = Original_Surfer({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>

      {/* navbar */}
      <Navbar />

      <div className="relative flex flex-col items-center h-80 justify-center text-center py-10 bg-[url('/images/news-bg.png')] bg-cover bg-center">
     
        <h1 className={`${originalSurfer.className} text-5xl`}>Find News that Meet with <br /> Your Needs</h1>
        <div className="flex mt-14 gap-4 w-1/3">
          <div className="flex border-1 border-dark py-2 px-4 rounded-full w-full">
            <Search className=" shrink-0 pr-2" />
            <input type="text" placeholder="Search any news that suit you " className="w-full text-sm bg-transparent text-gray-700 outline-none border-none placeholder:text-gray-400" />
          </div>
          <button className="rounded-full bg-[#c80000] text-sm text-white shadow-sm transition px-4 w-1/3" >Search News</button>
        </div>
      </div>

      {/* ticker */}
      <div className="h-8 rounded-xl items-center flex overflow-hidden bg-gray-100 mx-5 my-3 px-2 py-5">
        <div className="z-10 text-[#c80000]  h-full flex items-center px-3">
          News Update :
        </div>
        <div className="ticker-animation flex gap-40 text-[#111111] text-sm">
          <span>Punjab Government Announces New Policy</span>
          <span>India Wins Todays Cricket Match</span>
          <span>Latest Updates From Across India</span>
        </div>
      </div>

      <FeaturedNews />

    </>
  );
}
