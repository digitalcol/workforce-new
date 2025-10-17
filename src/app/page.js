import FadeInWhenVisible from "@/components/FadeEffects";
import VisionSection from "@/components/VisionSection";
import { enterpriseData, heroData, visionData } from "@/utils/data";
import HeroSection from "@/components/Hero";
import EnterpriseChoose from "@/components/EnterpriseChoose";
import CaseStudyTestimonials from "@/components/Testimonial";
import ClosuresCritical from "@/components/ClosureCritical";
import ContactWorkforce from "@/components/ContactWorkforce";

export const metadata = {
  title: "Workforce - India's Employment Law Infrastructure",
  description:
    "Every companies operates on regulation. We are building the system that executes it. From the EPF to the Factories Act, across every state, every industry. Compliance that works for you. This is the system that India scales on.",
  alternates: {
    canonical: "https://workforce.com/aboutUs",
  },
  openGraph: {
    title: "Workforce - India's Employment Law Infrastructure",
    description:
      "Every companies operates on regulation. We are building the system that executes it. From the EPF to the Factories Act, across every state, every industry. Compliance that works for you. This is the system that India scales on.",
    url: "https://workforce.com/aboutUs",
    siteName: "Workforce",
    type: "website",
  },
};

const Page = () => {
  return (
    <>
      <FadeInWhenVisible>
        <HeroSection data={heroData} />
      </FadeInWhenVisible>
      <VisionSection data={visionData} />
      <EnterpriseChoose data={enterpriseData} />
      <CaseStudyTestimonials />
      <ClosuresCritical />
      <ContactWorkforce />
    </>
  );
};

export default Page;
