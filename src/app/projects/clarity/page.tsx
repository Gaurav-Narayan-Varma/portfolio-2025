import ClarityIntro from "@/components/projects/clarity/clarity-intro";
import EmailIntegration from "@/components/projects/clarity/email-integration";
import MeetingTimeline from "@/components/projects/clarity/meeting-timeline";
import Onboarding from "@/components/projects/clarity/onboarding";
import HorizontalRule from "@/components/projects/horizontal-rule";

export default function Clarity() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1200px] px-12 py-18 animate-fade-in">
      <ClarityIntro />

      <HorizontalRule />

      <MeetingTimeline />

      <HorizontalRule />

      <Onboarding />

      <HorizontalRule />

      <EmailIntegration />
    </div>
  );
}
