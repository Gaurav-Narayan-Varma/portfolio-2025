import HorizontalRule from "@/components/projects/horizontal-rule";
import YhangryIntro from "@/components/projects/yhangry/yhangry-intro";
import YhangryProblem from "@/components/projects/yhangry/yhangry-problem";
import YhangrySolution from "@/components/projects/yhangry/yhangry-solution";
import YhangryImpact from "@/components/projects/yhangry/yhangry-impact";

export default function Yhangry() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1200px] px-12 py-18 animate-fade-in h-fit">
      <YhangryIntro />

      <HorizontalRule />

      <YhangryProblem />

      <HorizontalRule />

      <YhangrySolution />

      <HorizontalRule />

      <YhangryImpact />
    </div>
  );
}
