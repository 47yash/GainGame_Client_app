import { HeroSection } from "../Components/HeroSection.tsx";
import { HowItWorks } from "../Components/HowItWorks.tsx";
import { Features } from "../Components/Features.tsx";
import { Navbar } from "../Components/Navbar.tsx";
import { CTASection } from "../Components/CTASection.tsx";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Features />
        <CTASection />
      </main>
    </div>
  );
};