import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeSupport from "./components/WhoWeSupport";
import WhatWeOffer from "./components/WhatWeOffer";
import TransitionalHousing from "./components/TransitionalHousing";
import OurMission from "./components/OurMission";
import HowItWorks from "./components/HowItWorks";
import SuccessStories from "./components/SuccessStories";
import AccommodationStandards from "./components/AccommodationStandards";
import Services from "./components/Services";
import TrustedPartnerships from "./components/TrustedPartnerships";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import ReferralProcess from "./components/ReferralProcess";
import EarnWithConfidence from "./components/EarnWithConfidence";
import FAQ from "./components/FAQ";

import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  // Main Page Component
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* <Navbar /> Moved to Hero for strict layout requirements */}
      <Hero />
      <WhoWeSupport />
      <WhatWeOffer />
      <TransitionalHousing />
      <OurMission />
      <HowItWorks />
      <SuccessStories />
      <AccommodationStandards />
      <Services />
      <TrustedPartnerships />
      <WhoWeWorkWith />
      <ReferralProcess />
      <EarnWithConfidence />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
