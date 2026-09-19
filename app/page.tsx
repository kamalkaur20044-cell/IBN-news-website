import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>

    <div className="h-10 mx-auto items-center w-full flex overflow-hidden bg-gray-100">
        <div className="z-10 bg-[#111111] text-[#faf7f7] h-full mx-auto flex items-center w-[120px]">
          Breaking News
        </div>
        <div className="ticker-animation flex gap-40 text-[#111111] ">
           <span>Punjab Government Announces New Policy</span>
           <span>India Wins Todays Cricket Match</span> 
           <span>Latest Updates From Across India</span>
        </div>
    </div>

    {/* navbar */}
    <Navbar />




    </>
  );
}
