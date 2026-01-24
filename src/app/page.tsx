import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FreeOfferSection } from '@/components/sections/FreeOfferSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SolutionSection />
      <ServicesSection />
      <BenefitsSection />
      <FreeOfferSection />
      <SocialProofSection />
      <CTASection />
    </>
  );
}
