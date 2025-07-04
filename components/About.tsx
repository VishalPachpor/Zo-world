import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/about_img.png"
                alt="About Us"
                width={500}
                height={400}
                className="w-full max-w-[500px] h-auto rounded-2xl"
                priority
              />
              {/* Optional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                About Our Accelerator
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#a259ff] to-[#7c3aed] mb-6"></div>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-[500px]">
              We're building the future of AI x Crypto innovation. Through our
              6-week virtual accelerator, we connect founders with ZO's global
              network of travelers, creators, and technologists to scale
              breakthroughs in AI agents, privacy-preserving ML, and
              decentralized infrastructures for data, compute, and models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
