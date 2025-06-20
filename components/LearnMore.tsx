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
                <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  Learn More
                </button>
                <button className="flex items-center gap-2 text-white hover:text-[#a259ff] transition-colors duration-300">
                  Sign Up →
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/image.png"
              alt="EAK Visibility"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Lower Section - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/image2.png"
              alt="AI and Blockchain"
              width={600}
              height={400}
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
