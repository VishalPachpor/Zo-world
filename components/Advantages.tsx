import Image from "next/image";

export default function Advantages() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Small text and Heading */}
        <div className="text-center mb-16">
          <p className="text-[#a259ff] text-sm md:text-base mb-4">Advantages</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            WHY JOIN THE AI ACCELERATOR?
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column - Text */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/investment.png"
                  alt="Investment Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Investment Opportunities
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We facilitate intros and help build relationships with our
                  extensive network of top tier VCs and investors.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/streamline.svg"
                  alt="Program Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Flexible Program Structure
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fully remote and founder-friendly — designed to fit your
                  lifestyle, with mentorship and resources structured for both
                  early and growth-stage teams.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column - Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[400px] aspect-square">
              <Image
                src="/advantage.png"
                alt="AI Accelerator"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/grommet.svg"
                  alt="Fundraising Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Expert Fundraising Support
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gain access to 140+ Tier 1 VCs for invaluable fundraising
                  assistance and networking.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/stratig.png"
                  alt="Marketing Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Strategic Marketing Guidance
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leverage our GTM and PR strategies to elevate your brand and
                  market presence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button className="bg-[#7c3aed] hover:bg-[#a259ff] text-white font-semibold py-3 px-8 rounded-xl text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Apply
          </button>
          <button className="border border-[#7c3aed] text-white font-semibold py-3 px-8 rounded-xl text-base transition-all duration-300 hover:bg-[#7c3aed]/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
            Connect →
          </button>
        </div>
      </div>
    </section>
  );
}
