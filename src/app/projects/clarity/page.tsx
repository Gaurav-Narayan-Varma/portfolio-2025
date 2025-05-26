import ClarityIntro from "@/components/projects/clarity/clarity-intro";
import MeetingTimeline from "@/components/projects/clarity/meeting-timeline";
import HorizontalRule from "@/components/projects/horizontal-rule";
import Onboarding from "@/components/projects/clarity/onboarding";

export default function Clarity() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1200px] px-12 py-18 animate-fade-in">
      <ClarityIntro />

      <HorizontalRule />

      <MeetingTimeline />

      <HorizontalRule />

      <Onboarding />

    </div>
  );
}
