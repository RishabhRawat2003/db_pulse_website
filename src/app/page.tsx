import HeroSection from "@/components/homepageComponents/HeroSection";
import FeaturesGrid from "@/components/homepageComponents/FeaturesGrid";
import SupportedDB from "@/components/homepageComponents/SupportedDB";
import HowItWorks from "@/components/homepageComponents/HowItWorks";
import AgentIntegration from "@/components/homepageComponents/AgentIntegration";
import DownloadSection from "@/components/homepageComponents/DownloadSection";


export default function LandingPage() {

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Supported Databases */}
        <SupportedDB />

        {/* How It Works (step-by-step) */}
        <HowItWorks />

        {/* Agent Code Integration */}
        <AgentIntegration />

        {/* Desktop Download Section */}
        <DownloadSection />

      </main>
    </div>
  );
}

