import { CTASection } from "@/components/sections/CTASection";
import { ctas } from "@/data/navigation";

export function ReferralCta() {
  return (
    <CTASection
      title="Referring a Patient or Client?"
      description="Bravo accepts referrals from hospitals, rehabilitation facilities, physicians, case managers, and other healthcare providers."
      primary={ctas.makeReferral}
      secondary={ctas.speakWithTeam}
    />
  );
}
