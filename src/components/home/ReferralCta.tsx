import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";
import { ctas } from "@/data/navigation";

export function ReferralCta() {
  return (
    <CTASection
      title="Referrals"
      description={company.referralsNote}
      primary={ctas.makeReferral}
      secondary={ctas.speakWithTeam}
    />
  );
}
