import Image from "next/image";

export default function Launchpads() {
  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Upper Section - Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-[900px] mx-auto leading-tight">
            OUR ESTEEMED PARTNERS AND LAUNCHPADS IN THE AI X CRYPTO ECOSYSTEM
          </h2>
        </div>

        {/* Lower Section - 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* EAK Network */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/Vector.png"
              alt="EAK Network"
              width={64}
              height={64}
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              EAK Network
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Gain direct access to infrastructure providers, investors,
              mentors, foundations, exchanges, market makers and other essential
              partners to speed up your growth.
            </p>
            <a
              href="https://eakdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a259ff] hover:text-[#7c3aed] transition-colors duration-300 flex items-center gap-2"
            >
              Explore →
            </a>
          </div>

          {/* Partners & Launchpads */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/partnership.png"
              alt="Partners & Launchpads"
              width={64}
              height={64}
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Partners & Launchpads Include Industry Leaders & Innovators
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              From Virtuals to KuCoin, our partners are at the forefront of
              innovation.
            </p>
            <a
              href="https://www.linkedin.com/in/shabbiryk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a259ff] hover:text-[#7c3aed] transition-colors duration-300 flex items-center gap-2"
            >
              Connect →
            </a>
          </div>

          {/* Media Presence */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/media.png"
              alt="Media Presence"
              width={64}
              height={64}
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Media presence
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Get exposure to E global Web3-native audience and boost brand
              awareness by leveraging AK Wire's leading position in crypto
              media.
            </p>
            <a
              href="#engage"
              className="text-[#a259ff] hover:text-[#7c3aed] transition-colors duration-300 flex items-center gap-2"
            >
              Engage →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
