import FeastAuth from "@/components/projects/feast/feast-auth";
import FeastBackground from "@/components/projects/feast/feast-background";
import FeastIntro from "@/components/projects/feast/feast-intro";
import FeastToolbox from "@/components/projects/feast/feast-toolbox";
import HorizontalRule from "@/components/projects/horizontal-rule";

export default function Feast() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1200px] px-12 py-18 animate-fade-in h-fit">
      <FeastIntro />

      <HorizontalRule />

      <FeastBackground />

      <HorizontalRule />

      <FeastToolbox />

      <HorizontalRule />
      
      <FeastAuth />
    </div>
  );
}
