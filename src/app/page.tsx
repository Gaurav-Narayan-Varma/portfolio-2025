import IntroSection from "@/components/home/intro-section";
import ProjectSection from "@/components/home/project-section";

export default function Home() {
  return (
    <div className="w-full flex justify-center animate-fade-in">
      <div className="max-w-[1200px] w-full h-screen overflow-y-auto">
        <IntroSection />
        <ProjectSection />
      </div>
    </div>
  );
}
