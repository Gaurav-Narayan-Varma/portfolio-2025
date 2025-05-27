import FeastAuth from "@/components/projects/feast/feast-auth";
import FeastBackground from "@/components/projects/feast/feast-background";
import FeastIntro from "@/components/projects/feast/feast-intro";
import FeastTechStack from "@/components/projects/feast/feast-techstack";
import HorizontalRule from "@/components/projects/horizontal-rule";
import FeastOnboarding from "@/components/projects/feast/feast-onboarding";

export default function Feast() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1200px] px-12 py-18 animate-fade-in h-fit">
      <FeastIntro />

      <HorizontalRule />

      <FeastBackground />

      <HorizontalRule />

      <FeastTechStack />

      <HorizontalRule />

      <FeastAuth />

      <HorizontalRule />

      <FeastOnboarding />
    </div>
  );
}
