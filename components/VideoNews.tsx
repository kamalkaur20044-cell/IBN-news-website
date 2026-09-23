import React from "react";

const videos = [
  {
    youtubeId: "-qUx9l16Ic4",
    title:
      "3x3 Basketball Stars Shine: Champions Park Highlights in Video",
    description:
      "Some dive headfirst from a 10-meter platform, twisting through the air with fearless precision...",
    duration: "3 minutes to watch",
  },
  {
    youtubeId: "hOWFqd9QCyM",
    title:
      "How to watch women's football bronze match Spain vs. Germany",
    description:
      "The women's Olympic football tournament has provided us with plenty of fascinating action...",
    duration: "5 minutes to watch",
  },
  {
    youtubeId: "il-wVmj6Vj8",
    title:
      "Dispatches Nigeria in Olympic women's basketball quarterfinal",
    description:
      "Team USA took care of business against upstart Nigeria...",
    duration: "12 minutes to watch",
  },
];

const featuredVideo = {
  youtubeId: "t7c_YEe_8EM",
  title: "Saeid Esmaeili Leivesi wins gold",
  description:
    "Saeid Esmaeili Leivesi, a 21-year-old from the Islamic Republic of Iran, has won his first Olympic gold medal...",
  duration: "4 minutes to watch",
};

function YouTubeVideo({
  videoId,
}: {
  videoId: string;
}) {
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

export default function NewsInVideo() {
  return (
    <section className="mx-auto  mb-16 w-full max-w-[90%] bg-white px-6 py-10 md:px-8">

      {/* Header */}
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[28px] font-bold leading-tight text-black md:text-[32px]">
          News in Video
        </h2>

        <a
          href="#"
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

        {/* Left videos */}
        <div className="flex flex-col gap-[18px]">
          {videos.map((video) => (
            <article
              key={video.youtubeId}
              className="
                grid
                min-h-[136px]
                grid-cols-[198px_1fr]
                gap-4
                max-sm:grid-cols-[130px_1fr]
              "
            >
              {/* YouTube */}
              <div
                className="
                  h-[136px]
                  w-[198px]
                  overflow-hidden
                  rounded-md
                  bg-gray-200
                  max-sm:h-[100px]
                  max-sm:w-[130px]
                "
              >
                <YouTubeVideo videoId={video.youtubeId} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="mt-1 text-[17px] font-semibold leading-[1.45] text-[#151515]">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm leading-[1.45] text-[#555] max-sm:hidden">
                  {video.description}
                </p>

                <div className="mt-2 flex items-center gap-2 text-[13px] text-gray-500">
                  <span className="font-medium text-[#e95420]">
                    Olympics
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
            <YouTubeVideo videoId={featuredVideo.youtubeId} />
          </div>

          <h3 className="mt-[18px] text-2xl font-bold leading-tight text-black">
            {featuredVideo.title}
          </h3>

          <p className="mt-2 text-sm leading-[1.5] text-[#555]">
            {featuredVideo.description}
          </p>

          <div className="mt-3 flex items-center gap-2 text-[13px] text-gray-500">
            <span className="font-medium text-[#e95420]">
              Olympics
            </span>

            <span className="text-gray-400">|</span>

            <span>{featuredVideo.duration}</span>
          </div>
        </article>

      </div>
    </section>
  );
}