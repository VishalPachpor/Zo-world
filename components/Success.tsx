import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Upper Section - 2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#a259ff] text-sm md:text-base">
                Success
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              CELEBRATING OUR IMPACTFUL SUCCESS STORIES
            </h2>
          </div>

          {/* Right Side - Paragraph */}
          <div className="flex items-center mt-10">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[500px]">
              ZO has empowered over 300 projects, driving innovation in the AI
              and crypto space. Our founders consistently deliver groundbreaking
              solutions with measurable impact.
            </p>
          </div>
        </div>

        {/* Lower Section - 3 Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* DefAI Con Banner */}
          <Link
            href="https://lu.ma/94q9d1wg?tk=yezoot"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[16/10] overflow-hidden border-0 outline-none block"
          >
            <Image
              src="/sucess1.png"
              alt="DefAI Con"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 border-0 outline-none"
            />
          </Link>

          {/* Dealflow Den Banner */}
          <Link
            href="https://lu.ma/5yrmfg7v"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[16/10] overflow-hidden border-0 outline-none block"
          >
            <Image
              src="/sucess3.png"
              alt="The Dealflow Den"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 border-0 outline-none"
            />
          </Link>

          {/* Istanbul Blockchain Week Banner */}
          <Link
            href="https://istanbulblockchainweek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[16/10] overflow-hidden border-0 outline-none block"
          >
            <Image
              src="/sucess2.png"
              alt="Istanbul Blockchain Week 2025"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 border-0 outline-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
