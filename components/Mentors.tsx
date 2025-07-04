"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function Mentors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const mentors = [
    {
      id: 1,
      name: "Shabbir Khan",
      title: "Program Director & Demo Day Host",
      company: "EAK",
      image: "/mentors/shabbir.png",
      social: "https://www.linkedin.com/in/shabbiryk/",
      bio: "Leading the accelerator program and guiding startups through fundraising and growth.",
    },
    {
      id: 2,
      name: "Dharamveer Singh Chouhan",
      title: "Chief Executive Officer",
      company: "Zostel",
      image: "/mentors/dv.png",
      social: "https://www.linkedin.com/in/dvcoolster/",
      bio: "Experienced CEO with 38K+ followers, demonstrated leadership in hospitality and business development.",
    },
    {
      id: 3,
      name: "Artak Seyranyan",
      title: "AI Strategy Expert",
      company: "ChainGPT",
      image: "/mentors/artak.png",
      social: "https://www.linkedin.com/in/artak-seyranyan/",
      bio: "Expert on why Crypto x AI is the narrative of the cycle and product strategy.",
    },
    {
      id: 4,
      name: "Erhan Korhaliller",
      title: "Founder",
      company: "EAK",
      image: "/mentors/erhan.png",
      social:
        "https://www.linkedin.com/in/erhankorhaliller/?originalSubdomain=uk",
      bio: "EAK Founder sharing insights on the current AI landscape and market dynamics.",
    },
    {
      id: 5,
      name: "Stefano",
      title: "Investment Thesis Expert",
      company: "Virtuals Ventures",
      image: "/placeholder-user.jpg",
      social:
        "https://www.linkedin.com/in/stefano-virtuals/?originalSubdomain=sg",
      bio: "Specialist in investment thesis for AI projects and venture strategy.",
    },
    {
      id: 6,
      name: "Ahan",
      title: "Ecosystem & Token Expert",
      company: "BFF",
      image: "/placeholder-user.jpg",
      social: "https://www.linkedin.com/in/ahan-bff/?originalSubdomain=sg",
      bio: "Expert on ecosystem fit, PMF delivery, and token model vetting.",
    },
    {
      id: 7,
      name: "Christopher Johnson",
      title: "Community Growth Expert",
      company: "Virtuals",
      image: "/mentors/chrostoper.png",
      social:
        "https://www.linkedin.com/in/christoper-johnson-51226139/?originalSubdomain=sg",
      bio: "Specialist in growing the right community and sustainable growth strategies.",
    },
    {
      id: 8,
      name: "Joy Sim Kia",
      title: "Investment Partner",
      company: "Outlier Ventures",
      image: "/mentors/joy-sim.png",
      social: "https://www.linkedin.com/in/joy-sim-kia",
      bio: "Practical investor providing live feedback on founder decks and pitches.",
    },
    {
      id: 9,
      name: "Mark Rydon",
      title: "Co-founder & CSO",
      company: "Aethir",
      image: "/mentors/mark.png",
      social: "https://www.linkedin.com/in/markrydon/",
      bio: "Co-founder and CSO of Aethir, building decentralized cloud infrastructure for AI and blockchain applications.",
    },
    {
      id: 10,
      name: "Irina Heaver",
      title: "The Crypto Lawyer",
      company: "Legal Partner (Dubai, UAE)",
      image: "/mentors/irina.png",
      social: "https://www.linkedin.com/in/irinaheaver",
      bio: "Leading crypto legal expert with 46K+ followers, specializing in compliance and DAO structuring.",
    },
    {
      id: 11,
      name: "Jonas",
      title: "Growth Tools Expert",
      company: "Ape Terminal",
      image: "/placeholder-user.jpg",
      social: "https://www.linkedin.com/in/jonas-ape-terminal",
      bio: "Specialist in existing growth tools and strategies for crypto founders.",
    },
    {
      id: 12,
      name: "Kevin Jung",
      title: "Tokenomics Expert",
      company: "HLV",
      image: "/mentors/kevin.png",
      social: "https://www.linkedin.com/in/kevinhjung/",
      bio: "Deep expertise in tokenomics design and token economic models.",
    },
    {
      id: 13,
      name: "Suhrad Makwana",
      title: "Security Expert",
      company: "Securr",
      image: "/mentors/suhrad.png",
      social: "https://www.linkedin.com/in/suhrad-makwana-205/",
      bio: "Security by design expert focused on avoiding exploits in AI x Crypto projects.",
    },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(mentors.length / itemsPerSlide);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Slower rotation to give users more time to read mentor info
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentMentors = () => {
    const start = currentSlide * itemsPerSlide;
    return mentors.slice(start, start + itemsPerSlide);
  };

  const handleMentorClick = (socialUrl: string) => {
    window.open(socialUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            MEET OUR MENTORS
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Learn from industry leaders and seasoned entrepreneurs who have
            built successful AI and crypto companies. Get personalized guidance
            from the best.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
            aria-label="Previous mentors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
            aria-label="Next mentors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mentors Grid */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {mentors
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((mentor) => (
                      <div
                        key={mentor.id}
                        onClick={() => handleMentorClick(mentor.social)}
                        className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl group"
                      >
                        {/* Mentor Image */}
                        <div className="relative mb-6">
                          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-500/50 transition-all duration-300">
                            <Image
                              src={mentor.image}
                              alt={mentor.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover scale-110"
                            />
                          </div>
                          {/* External Link Icon */}
                          <div className="absolute -top-2 -right-2 bg-purple-600 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Mentor Info */}
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {mentor.name}
                          </h3>
                          <p className="text-purple-400 font-medium mb-1">
                            {mentor.title}
                          </p>
                          <p className="text-gray-400 text-sm mb-3">
                            {mentor.company}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {mentor.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-purple-500 scale-110"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to learn from the best in AI and crypto?
          </p>
          <a
            href="https://zostel.typeform.com/zo-accelerator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors text-lg"
          >
            Apply to Join Our Program
          </a>
        </div>
      </div>
    </section>
  );
}
