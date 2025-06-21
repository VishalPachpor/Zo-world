import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="EAK Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Fueling the next wave of innovation at the intersection of AI and
              blockchain. Backed by proven leaders, strategic investors, and a
              powerful global network.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/company/eak-digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </Link>
              <Link
                href="https://twitter.com/EAK_Erhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:erhan.korhaliller@eakdigital.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">
                  erhan.korhaliller@eakdigital.com
                </span>
              </a>
              <a
                href="https://t.me/EAK_Erhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.325.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="text-sm">
                  Telegram: @EAK_Erhan | @Shabbiryk
                </span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">
                  Next Cohort: Starts July 14, 2025
                </span>
              </div>
            </div>
          </div>

          {/* Navigate Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Navigate</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link
                href="#about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                About The Program
              </Link>
              <Link
                href="#agenda"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Agenda
              </Link>
              <Link
                href="#mentors"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Mentors
              </Link>
              <Link
                href="#ecosystem"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Ecosystem
              </Link>
            </div>
          </div>

          {/* Try For Now Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Join Us</h3>
            <p className="text-gray-400 text-sm">
              Ready to be part of the next wave of innovation? Apply now for our
              upcoming cohort.
            </p>
            <Link href="https://tally.so/r/mYyYk6" className="inline-block">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
                Try For Now
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 EAK Digital. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made With 💜 For Founders Building The Future.
          </p>
        </div>
      </div>
    </footer>
  );
}
