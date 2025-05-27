import SectionOverview from "@/components/projects/section-overview";

export default function FeastBackground() {
  return (
    <>
      <SectionOverview
        title="Background"
        paragraph1="I joined as the sole engineer and inherited an early prototype with key issues in authentication and user onboarding. Essential features like scheduling, discovery, and booking were absent, requiring manual operational management through spreadsheets."
        paragraph2="The AI-generated codebase suffered from substantial technical debt, with poor maintainability and persistent bugs. I rebuilt it from scratch, implementing proper core functionality and adding fundamental features like an admin dashboard, scheduling engine, and end-to-end booking flow."
      />
    </>
  );
}
