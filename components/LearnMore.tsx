import Image from "next/image";

export default function LearnMore() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Upper Section - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-32">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Image
                src="/lock.png"
                alt="Unlock Icon"
                width={48}
                height={48}
                className="mb-6"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                UNLOCK YOUR POTENTIAL WITH OUR ACCELERATOR
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[500px]">
                Our 6-week program offers expert-led sessions designed to propel
                your AI startup forward. Benefit from over two months of
                fundraising support and direct introductions to key players in
                the industry.
              </p>
              <div className="flex gap-6 mt-8">
                <a
                  href="https://vishals-organization-22.gitbook.io/product-docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
                >
                  Learn More
                </a>
                <button className="flex items-center gap-2 text-white hover:text-[#a259ff] transition-colors duration-300">
                  Sign Up →
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/demo1.jpg"
              alt="Demo Day Presentation"
              width={600}
              height={300}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              SUCCESS STORIES
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              CELEBRATING OUR IMPACTFUL SUCCESS STORIES
            </p>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8">
                <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
                <p className="text-purple-200">Intro Requests per Startup</p>
                <p className="text-gray-300 text-sm mt-2">
                  Average requests from top-tier VCs after Demo Day
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8">
                <h3 className="text-4xl font-bold text-white mb-2">$500M+</h3>
                <p className="text-purple-200">Portfolio Value</p>
                <p className="text-gray-300 text-sm mt-2">
                  Combined valuation of our accelerated startups
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8">
                <h3 className="text-4xl font-bold text-white mb-2">140+</h3>
                <p className="text-purple-200">Tier 1 VCs</p>
                <p className="text-gray-300 text-sm mt-2">
                  Access to leading investors in our network
                </p>
              </div>
            </div>
          </div>

          {/* Success Story Quote */}
          <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 italic mb-6">
              "Each startup in our latest cohort received an average of over 50
              intro requests after Demo Day from crypto's most value-add angels
              and funds, including Paradigm, Coinbase, Pantera, Multicoin and
              Dragonfly."
            </p>
            <p className="text-purple-400 font-semibold">
              zo Accelerator Impact Report
            </p>
          </div>
        </div>

        {/* Lower Section - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/demo2.jpg"
              alt="AI and Blockchain"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              HARNESSING AI AND BLOCKCHAIN: A NEW ERA OF INNOVATION AWAITS
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[500px]">
              The fusion of AI and blockchain technology is not just a trend;
              it's a transformative force that will redefine industries.
              Together, they unlock unprecedented opportunities for efficiency,
              transparency, and intelligent autonomy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
