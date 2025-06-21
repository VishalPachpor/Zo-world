import Image from "next/image";
import Link from "next/link";
import {
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  SendIcon,
  CalendarDaysIcon,
} from "lucide-react";

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
                href="https://www.linkedin.com/company/eak-digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="https://x.com/eak_digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <TwitterIcon className="w-5 h-5 text-white" />
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
                <MailIcon className="w-5 h-5" />
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
                <SendIcon className="w-5 h-5" />
                <span className="text-sm">
                  Telegram: @EAK_Erhan | @Shabbiryk
                </span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <CalendarDaysIcon className="w-5 h-5" />
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
