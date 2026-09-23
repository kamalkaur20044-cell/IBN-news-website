import FeaturedNews from "@/components/FeaturedNews";
import LatestNews from "@/components/LatestNews";
import Navbar from "@/components/Navbar";
import VideoNews from "@/components/VideoNews";
import Footer from "@/components/Footer";
import { DotIcon, Search } from "lucide-react";
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

      {/* ticker */}
      <div className=" md:h-[62px] h-[50px] overflow-hidden border-t-[4px] border-b-[4px] border-red-800">
        <div className="flex md:h-[18px] h-[12px] items-center justify-between bg-[#c80000] px-3 md:text-[11px] text-[8px] font-bold text-white">
          <span className="flex items-center">LIVE <DotIcon className="animate-[dotPulse_1s_ease-in-out_infinite] h-[100%] shadow-amber-600 " /></span>
          <span>10:00AM</span>
        </div>
        <div className="relative flex h-[36px] items-center flex-1 overflow-hidden bg-gray-100">
          <div className="ticker-animation flex h-full items-center shrink-0 gap-20 whitespace-nowrap font-medium md:tracking-[2px] tracking-normal">
            <span className="text-xs md:text-sm font-medium">Latest Updates From Across India</span>
            <span className="text-xs md:text-sm font-medium">India Wins Today's Cricket Match</span>
            <span className="text-xs md:text-sm font-medium">Punjab Government Announces New Policy</span>
            <span className="text-xs md:text-sm font-medium">India Wins Cricket Match</span>
          </div>
          <div className="absolute right-0 top-0 z-20 flex h-[90%] w-[150px] md:w-[300px] items-center justify-center bg-[#c80000] md:pl-8 text-xs  md:text-[20px] font-bold text-white  [clip-path:polygon(11%_0,100%_0,92%_100%,0_100%)]">
            BREAKING NEWS
          </div>
        </div>
      </div>

    {/*}
      <div className="relative flex flex-col items-center h-80 justify-center text-center py-10 bg-[url('/images/news-bg.png')] bg-cover bg-center">

        <h1 className={`${originalSurfer.className} text-5xl`}>Find News that Meet with <br /> Your Needs</h1>
        <div className="flex mt-14 gap-4 w-1/3">
          <div className="flex border-1 border-dark py-2 px-4 rounded-full w-full">
            <Search className=" shrink-0 pr-2" />
            <input type="text" placeholder="Search any news that suit you " className="w-full text-sm bg-transparent text-gray-700 outline-none border-none placeholder:text-gray-400" />
          </div>
          <button className="rounded-full bg-[#c80000] hover:bg-[#a90d0d] h text-sm text-white shadow-sm transition px-4 w-1/3" >Search News</button>
        </div>
      </div>

      */}

      <FeaturedNews />
      <hr className="w-[90%] mx-auto mb-12 border-gray-300" />

      <LatestNews />
      <hr className="w-[90%] mx-auto mb-12 border-gray-300" />

      <VideoNews />
     <Footer />

    </>
  );
}
