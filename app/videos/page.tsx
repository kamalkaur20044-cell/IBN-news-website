'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Video = {
    id: number,
    title: string,
    description: string,
    video_type: "youtube" | "local";
    youtube_id: string | null;
    video_path: string | null;
    thumbnail: string | null;
    duration: string | null;
    published_at: string | null;
};

function VideoPlayer({ video }: { video: Video }) {
    if (video.video_type === "youtube" && video.youtube_id) {
        return (
            <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${video.youtube_id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        );
    }

    if (video.video_type === "local" && video.video_path) {
        return (
            <video className="h-full w-full object-contain" src={video.video_path} poster={video.thumbnail || undefined} controls />
        );
    }

    return (
        <div className="flex h-full items-center justify-center text-gray-500">
            Video Unavailable
        </div>
    );
}

export default function VideoPage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await fetch('/api/videos');
                const data = await response.json();
                console.log(data);
                console.log(data.videos.length);

                if (Array.isArray(data.videos)) {
                    setVideos(data.videos);
                }
            } catch (error) {
                console.error("Failed to fetch videos", error);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    if (loading) {
        return (
            <main className="mx-auto w-full max-w-[90%] px-6 py-10 md:px-8">
                <p>Loading videos...</p>
            </main>
        );
    }

    const videosCount =videos.length;
    const Videos = videos.slice(4, videosCount);


    return (
        <>
            <Navbar />
            <main className="mx-auto w-full max-w-[90%] px-6 py-10 md:px-8">
                  
                <div className="flex items-center gap-4">
                <h2 className="text-[18px] font-bold text-red-600 md:text-[28px]">
                  Latest news videos and updates
                </h2> 
                <ArrowRightIcon />
                </div>

                {videos.length === 0 ? (
                    <p className="mt-10 text-gray-500">
                        No videos available.
                    </p>
                ) : (
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {Videos.map((video) => (
                            <article key={video.id} className="overflow-hidden rounded-lg bg-white shadow">
                                <div className="aspect-video w-full bg-gray-200">
                                    <VideoPlayer video={video} />
                                </div>

                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-black">
                                        {video.title}
                                    </h2>

                                    {video.description && (
                                        <p className="mt-2 text-sm leading-6 text-gray-600">
                                            {video.description}
                                        </p>
                                    )}

                                    {video.duration && (
                                        <p className="mt-3 text-sm text-[#e95420]">
                                            {video.duration}
                                        </p>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
