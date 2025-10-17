import FadeInWhenVisible from "@/components/FadeEffects";
import HeroJobs from "@/components/HeroJobs";
import OpenPositions from "@/components/OpenPositions";

import AboutHero from "@/components/Vision";

import React from "react";

export const metadata = {
  title:
    "Jobs |  Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
  description:
    "Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
  alternates: {
    canonical: "https://workforce.com/aboutUs",
  },
  openGraph: {
    title:
      "Jobs |  Workforce - Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
    description:
      "Where Law Becomes Code. Where Compliance Becomes Infrastructure.",
    url: "https://workforce.com/aboutUs",
    siteName: "Workforce",
    type: "website",
  },
};

const Jobs = () => {
  return (
    <>
      <FadeInWhenVisible>
        <HeroJobs />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <AboutHero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <OpenPositions />
      </FadeInWhenVisible>
    </>
  );
};

export default Jobs;
