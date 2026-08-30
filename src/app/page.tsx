import { AboutIntro } from "@/components/home/AboutIntro";
import { CareersCta } from "@/components/home/CareersCta";
import { HeroSection } from "@/components/home/HeroSection";
import { HowCareBegins } from "@/components/home/HowCareBegins";
import { ReferralCta } from "@/components/home/ReferralCta";
import { ServiceArea } from "@/components/home/ServiceArea";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseBravo } from "@/components/home/WhyChooseBravo";
import { CTASection } from "@/components/sections/CTASection";
import { InsuranceNotice } from "@/components/sections/InsuranceNotice";
import { MissionSection } from "@/components/sections/MissionSection";
import { ResidentialComingSoon } from "@/components/sections/ResidentialComingSoon";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { ctas } from "@/data/navigation";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <HeroSection />
      <TrustBar />
      <AboutIntro />
      <ServicesPreview />
      <WhyChooseBravo />
      <MissionSection />
      <HowCareBegins />
      <ReferralCta />
      <ServiceArea />
      <ResidentialComingSoon />
      <InsuranceNotice />
      <CareersCta />
      <CTASection
        title="Let's Discuss How Bravo Healthcare Can Help."
        primary={ctas.contactUs}
        secondary={ctas.makeReferral}
      />
    </>
  );
}
