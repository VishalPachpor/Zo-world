import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Background Word - with individual letter shading */}
      <h1
        className="accelerator-text pointer-events-none select-none absolute w-full left-0 z-0 tracking-[0.05em] whitespace-nowrap top-[6%] md:top-[5%] text-center"
        aria-hidden="true"
      >
        <span className="accelerator-letter" style={{ opacity: 0.4 }}>
          A
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.5 }}>
          C
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.3 }}>
          C
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.7 }}>
          E
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.8 }}>
          L
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.9 }}>
          E
        </span>
        <span className="accelerator-letter" style={{ opacity: 1.0 }}>
          R
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.8 }}>
          A
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.6 }}>
          T
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.5 }}>
          O
        </span>
        <span className="accelerator-letter" style={{ opacity: 0.3 }}>
          R
        </span>
      </h1>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto h-full flex flex-col md:flex-row items-center justify-center md:items-stretch md:justify-center">
        {/* Mobile Layout: Stack everything, Desktop: Absolute positioning */}
        <div className="flex flex-col w-full md:w-auto">
          {/* Hero Image and Shadow */}
          <div className="relative flex flex-col items-center justify-center md:static md:block">
            <div className="relative flex justify-center items-center">
              <Image
                src="/hero.png"
                alt="AI Avatar"
                width={700}
                height={600}
                className="relative z-30 w-[260px] sm:w-[340px] md:w-[700px] lg:w-[800px] h-auto mx-auto"
                priority
              />
              {/* Shadow Image */}
              <div className="absolute z-40 bottom-[-10px] w-[260px] sm:w-[340px] md:w-[700px] lg:w-[800px] h-[80px] sm:h-[120px] md:h-[300px] md:bottom-[-20px] lg:h-[350px]">
                <Image
                  src="/Shadow.png"
                  alt="Shadow"
                  width={900}
                  height={400}
                  className="w-full h-full opacity-100 bg-gradient-to-t from-black/68 via-black/30 to-black/10 rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="relative z-40 max-w-full md:max-w-[250px] mt-8 md:mt-0 md:absolute md:left-[10%] md:top-[30%] text-center md:text-left mx-auto md:mx-0">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              This accelerator brings founders not just capital, but deep
              technical support, token model expertise, and access to global
              Web3 x AI networks.
            </p>
            <button
              className="bg-[#7c3aed] hover:bg-[#a259ff] text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-xl text-base sm:text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full sm:w-auto"
              style={{ boxShadow: "0px 4px 24px 0px #A259FF33" }}
            >
              Join the Accelerator
            </button>
          </div>

          {/* Right Content */}
          <div className="relative z-40 max-w-full md:max-w-[250px] mt-8 md:mt-0 md:absolute md:right-[10%] md:top-[40%] text-center md:text-left mx-auto md:mx-0">
            <Image
              src="/Sub.png"
              alt="Stat"
              width={250}
              height={250}
              className="w-[220px] sm:w-[250px] h-auto mx-auto md:mx-0"
            />
          </div>

          {/* $500M+ positioned above the left shoulder */}
          <div className="relative z-40 mt-8 md:mt-0 md:absolute md:left-[10%] md:top-[65%] text-center md:text-left mx-auto md:mx-0">
            <Image
              src="/Stat.png"
              alt="Stat"
              width={250}
              height={250}
              className="w-[220px] sm:w-[250px] h-auto mx-auto md:mx-0"
            />
          </div>

          {/* Tags positioned above the right shoulder - same level as $500M+ */}
          <div className="relative z-40 mt-6 md:mt-0 md:absolute md:right-[10%] md:top-[65%] text-center md:text-right mx-auto md:mx-0">
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-end">
              <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-gray-500 text-gray-300 text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-[#a259ff] hover:text-white cursor-pointer select-none">
                DEFI + AI
              </span>
              <span className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-gray-500 text-gray-300 text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-[#a259ff] hover:text-white cursor-pointer select-none">
                DePIN Networks
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
