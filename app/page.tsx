import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Launchpads from "@/components/Launchpads";
import Success from "@/components/Success";
import LearnMore from "@/components/LearnMore";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <div className="pt-24 md:pt-22">
        <HeroSection />
        <Partners />
        <div id="about">
          <About />
        </div>
        <Advantages />
        <div id="agenda">
          <Launchpads />
        </div>
        <Success />
        <div id="mentors">
          <LearnMore />
        </div>
        <div id="testimonials">
          <FAQ />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
