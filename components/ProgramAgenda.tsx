"use client";
import { useState, useEffect, useRef } from "react";

export default function ProgramAgenda() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = ["/demoday1.MOV", "/demoday2.MOV"];

  const weeks = [
    {
      week: "Week 1",
      title: "Kickoff & Product Clarity",
      emoji: "🎯",
      items: [
        "Program onboarding & goal alignment",
        "Meet ZO mentors, team, and fellow cohort founders",
        "Define your AI x Crypto value proposition & market narrative",
        "Align on milestones and KPIs for the 6-week sprint",
      ],
    },
    {
      week: "Week 2",
      title: "Market Strategy & User Acquisition",
      emoji: "🚀",
      items: [
        "Build your go-to-market (GTM) strategy",
        "Identify your ideal users (Web3 natives, institutions, developers, etc.)",
        "Growth channels: X (Twitter), Telegram, Discord, and community building",
        "Prepare early traction experiments and campaign setup",
      ],
    },
    {
      week: "Week 3",
      title: "Fundraising Readiness",
      emoji: "💸",
      items: [
        "Build a compelling investor pitch narrative",
        "Design a winning deck and one-pager",
        "Understand token vs equity fundraising strategies",
        "Start preparing for investor intros via ZO's Tier 1 VC network",
      ],
    },
    {
      week: "Week 4",
      title: "Tokenomics & Infrastructure",
      emoji: "📊",
      items: [
        "Token model deep dive (if applicable): utility, supply, incentives",
        "Legal & compliance considerations for tokenized products",
        "Leverage decentralized infra: compute, storage, data privacy",
        "Positioning your project for launchpads & exchanges",
      ],
    },
    {
      week: "Week 5",
      title: "Pitch Polish & KOL Exposure",
      emoji: "🎙️",
      items: [
        "Refine your pitch with 1:1 mentor feedback",
        "Build PR & marketing narratives with ZO World",
        "Prepare outreach to ZO's 80+ KOL network for awareness",
        "Finalize demo materials: pitch, visuals, traction",
      ],
    },
    {
      week: "Week 6",
      title: "Demo Day & Deal Flow",
      emoji: "🎤",
      items: [
        "Live pitch to select VCs, angels, launchpads, and exchanges",
        "Generate real-time interest and follow-up meetings",
        "Celebrate graduation and access post-program fundraising support",
        "Continue support for exchange listing, token launch, and scaling",
      ],
    },
  ];

  // Summarized agenda for each week
  const weekSummaries = [
    "Kickoff the program with onboarding, goal alignment, and meeting mentors and fellow founders. Define your AI x Crypto value proposition and set clear milestones for the 6-week sprint.",
    "Develop your go-to-market strategy, identify your ideal users, and set up early traction experiments across key growth channels like X, Telegram, and Discord.",
    "Craft a compelling investor pitch, design your deck and one-pager, and prepare for fundraising with insights into token vs equity strategies and VC introductions.",
    "Deep dive into tokenomics, legal and compliance for tokenized products, and leverage decentralized infrastructure to position your project for launchpads and exchanges.",
    "Polish your pitch with 1:1 mentor feedback, build your PR and marketing narrative, and prepare outreach to KOLs while finalizing all demo materials.",
    "Present your project live to VCs, angels, and launchpads on Demo Day, generate real-time interest, and celebrate graduation with continued support for fundraising and scaling.",
  ];

  // Auto-rotate videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Longer rotation for videos
    return () => clearInterval(interval);
  }, [videos.length]);

  // Handle video loading
  useEffect(() => {
    const loadVideos = async () => {
      const videoPromises = videos.map((src) => {
        return new Promise((resolve, reject) => {
          const video = document.createElement("video");
          video.onloadeddata = resolve;
          video.onerror = reject;
          video.src = src;
        });
      });

      try {
        await Promise.all(videoPromises);
        setVideosLoaded(true);
      } catch (error) {
        console.error("Error loading videos:", error);
        setVideosLoaded(true); // Still show the component even if some videos fail
      }
    };

    loadVideos();
  }, [videos]);

  // Handle video playback when currentVideo changes
  useEffect(() => {
    if (videosLoaded) {
      // Pause all videos first
      videoRefs.current.forEach((video, index) => {
        if (video) {
          video.pause();
        }
      });

      // Play the current video with better error handling
      const currentVideoElement = videoRefs.current[currentVideo];
      if (currentVideoElement) {
        currentVideoElement.currentTime = 0; // Reset to beginning

        // Check if the video can play
        const playPromise = currentVideoElement.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
            })
            .catch((error) => {
              // Auto-play was prevented
              console.log("Autoplay prevented:", error.message);
              // Video will show first frame and user can click to play
            });
        }
      }
    }
  }, [currentVideo, videosLoaded]);

  // Grouped weeks for display
  const groupedWeeks = [
    {
      heading: "WEEK 1 - 2",
      weeks: [
        { title: weeks[0].title, summary: weekSummaries[0] },
        { title: weeks[1].title, summary: weekSummaries[1] },
      ],
    },
    {
      heading: "WEEK 3 - 4",
      weeks: [
        { title: weeks[2].title, summary: weekSummaries[2] },
        { title: weeks[3].title, summary: weekSummaries[3] },
      ],
    },
    {
      heading: "WEEK 5 - 6",
      weeks: [
        { title: weeks[4].title, summary: weekSummaries[4] },
        { title: weeks[5].title, summary: weekSummaries[5] },
      ],
    },
  ];

  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            OUR PROGRAM
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            6-week intensive accelerator program designed to take your AI x
            Crypto startup from idea to investor-ready with hands-on mentorship
            and real traction.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative mx-auto mb-10 rounded-2xl overflow-hidden bg-gray-900 w-[260px] sm:w-[340px] md:w-[700px] lg:w-[800px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          {!videosLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {videos.map((video, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentVideo && videosLoaded
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video}
                className="w-full h-full object-cover object-center"
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => {
                  console.error(`Failed to load video: ${video}`);
                }}
              />
            </div>
          ))}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Play/Pause button overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={() => {
                const currentVideoElement = videoRefs.current[currentVideo];
                if (currentVideoElement) {
                  if (currentVideoElement.paused) {
                    currentVideoElement.play().catch((error) => {
                      console.log("Play failed:", error.message);
                    });
                  } else {
                    currentVideoElement.pause();
                  }
                }
              }}
              className={`bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 ${
                isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Video controls and dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideo
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Weekly Cards - Alliance Style */}
        <div className="mt-12 space-y-16">
          {groupedWeeks.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col items-center">
              {/* Group Heading */}
              <div className="mb-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide uppercase mb-1">
                  {group.heading}
                </h3>
              </div>
              {/* Two Cards Side by Side */}
              <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.weeks.map((week, idx) => (
                  <div
                    key={idx}
                    className="bg-[#18181b] rounded-2xl p-6 md:p-8 shadow-none flex flex-col justify-center min-h-[120px] w-full"
                  >
                    <div className="font-semibold text-white text-base md:text-lg mb-2">
                      {week.title}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {week.summary}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to accelerate your AI x Crypto startup?
          </p>
          <a
            href="https://zostel.typeform.com/zo-accelerator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors text-lg"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
