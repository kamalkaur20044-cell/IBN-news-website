"use client";
import { useEffect, useState } from "react";


type Video = {
  id: number;
  title: string;
  description: string | null;
  video_type: "youtube" | "local";
  youtube_id: string | null;
  video_path: string | null;
  thumbnail: string | null;
  duration: string | null;
  published_at: string | null;
};

function YouTubeVideo({ videoId, }: { videoId: string; }) {
  return (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

function VideoPlayer({video}:{video:Video}){
  if(video.video_type === "youtube" && video.youtube_id){
    return <YouTubeVideo videoId={video.youtube_id} /> ;
  }
  if(video.video_type === "local" && video.video_path){
    return(
      <video className="h-full w-full object-contain" src={video.video_path} poster={video.thumbnail || undefined} controls />
    );
  }
  return(
    <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">Video unavailable</div>
  )
}

export default function NewsInVideo() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/videos");
        const data = await response.json();

        console.log("VIDEOS API DATA:", data);
        console.log("VIDEOS API DATA:", videos.length);

        if (Array.isArray(data.videos)) {
          setVideos(data.videos);
        }
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return <div className="h-full">Loading videos...</div>;
  }

  const featuredVideo = videos[0];
  const sideVideos = videos.slice(1, 4);

  if (!featuredVideo) {
    return null;
  }

  return (
    <section className="mx-auto  mb-16 w-full max-w-[90%] px-6 py-10 md:px-8">
        
      {/* Header */}
      <div className="mb-7 flex items-center justify-between  border-b border-gray-200 pb-4">
        <h2 className="text-[28px] font-bold leading-tight text-black md:text-[32px]">
          News in Video
        </h2>

        <a
          href="/videos"
          className="group flex items-center gap-2 text-sm font-semibold text-[#e95420]"
        >
          Show More

          <span className="text-[24px] leading-none transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[42px]">

        {/*------ Left videos--- */}
        <div className="flex flex-col gap-[18px]">
          {sideVideos.map((video) => (
            <article
              key={video.id}
              className="grid  min-h-[136px]  grid-cols-[198px_1fr]  gap-4 max-sm:grid-cols-[130px_1fr] ">
              <div
                className=" h-[136px] w-[198px] overflow-hidden  rounded-md  bg-gray-200 max-sm:h-[100px] max-sm:w-[130px]">
                  <VideoPlayer video={video} />
              </div>

              {/* --Text-- */}
              <div className="min-w-0">
                <h3 className="mt-1 text-[17px] font-semibold leading-[1.45] text-[#151515]">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm leading-[1.45] text-[#555] max-sm:hidden">
                  {video.description}
                </p>

                <div className="mt-2 flex items-center gap-2 text-[13px] text-gray-500">
                  <span className="font-medium text-[#e95420]">
                    Video
                  </span>

                  <span className="text-gray-400">|</span>

                  <span>{video.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured */}
        <article className="min-w-0">

          <div className="h-[307px] w-full overflow-hidden rounded-lg bg-gray-200">
            <VideoPlayer video={featuredVideo} />
          </div>

          <h3 className="mt-[18px] text-2xl font-bold leading-tight text-black">
            {featuredVideo.title}
          </h3>

          <p className="mt-2 text-sm leading-[1.5] text-[#555]">
            {featuredVideo.description}
          </p>

          <div className="mt-3 flex items-center gap-2 text-[13px] text-gray-500">
            <span className="font-medium text-[#e95420]">
              Video
            </span>

            <span className="text-gray-400">|</span>

            <span>{featuredVideo.duration}</span>
          </div>
        </article>

      </div>
    </section>
  );
}