"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProgramAgenda() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = ["/Agenda1.jpg", "/Agenda2.jpeg", "/Agenda3.jpg"];

  const weeks = [
    {
      week: "Week 1",
      title: "Kickoff & Product Clarity",
      emoji: "🎯",
      items: [
        "Program onboarding & goal alignment",
        "Meet EAK mentors, team, and fellow cohort founders",
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
        "Start preparing for investor intros via EAK's Tier 1 VC network",
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
        "Build PR & marketing narratives with EAK Digital",
        "Prepare outreach to EAK's 80+ KOL network for awareness",
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

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Slightly slower rotation for better viewing
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle image loading
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true); // Still show the component even if some images fail
      }
    };

    loadImages();
  }, [images]);

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

        {/* Image Carousel */}
        <div className="relative mx-auto mb-10 rounded-2xl overflow-hidden bg-gray-900 w-[260px] sm:w-[340px] md:w-[700px] lg:w-[800px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage && imagesLoaded
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`EAK Accelerator Program - Image ${index + 1}`}
                fill
                className="object-cover object-center w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={index === 0}
                quality={90}
                onError={() => {
                  console.error(`Failed to load image: ${image}`);
                }}
              />
            </div>
          ))}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
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
            href="https://tally.so/r/mYyYk6"
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
