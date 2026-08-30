import { CTASection } from "@/components/sections/CTASection";
import { ctas } from "@/data/navigation";

export function CareersCta() {
  return (
    <CTASection
      dark={false}
      title="Build a Career That Makes a Difference"
      description="Join a team committed to compassionate, respectful, person-centered care."
      primary={ctas.viewOpportunities}
      secondary={ctas.submitResume}
    />
  );
}
