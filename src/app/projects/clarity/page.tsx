import HorizontalRule from "@/components/projects/horizontal-rule";
import MediaDisplay from "@/components/projects/media-display";
import SectionOverview from "@/components/projects/section-overview";

type Stat = {
  stat: string;
  name: string;
  description: string;
};

const stats: Stat[] = [
  {
    stat: "1st",
    name: "Engineer Hire",
    description: "Building and scaling from Pre-Seed to Seed",
  },
  {
    stat: "10x",
    name: "User growth",
    description: "Zero-to-one premium AI product",
  },
  {
    stat: "5x",
    name: "Engagement",
    description: "Average meetings recorded per Clarity user",
  },
];

export default function Clarity() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-[1200px] px-12 py-18 animate-fade-in">
      <MediaDisplay src="/clarity-project/clarity-ov.png" video={false} />

      <SectionOverview
        title="Clarity"
        subTitle1="Founding Engineer"
        subTitle2="Desktop Web App"
        paragraph1="I've spent the past year building the future of meeting intelligence at Clarity in SF. We're focused on helping high-performance operators capture and leverage every detail from their meetings through AI-powered transcription, actionable insights, and seamless integrations."
      />

      {/* Stats */}
      <img
        src="/clarity-project/stat-cards.png"
        alt="stat cards"
        className="w-full"
      />

      <HorizontalRule />

      <SectionOverview
        title="Meeting Timeline"
        paragraph1="Before I joined, the product allowed users to record meetings, view transcripts, and access a list of all their meetings from the homepage. However, users often felt overwhelmed by the need to switch between their meeting calendars and our app to manage their schedules. To address this, I developed an in-app calendar that seamlessly integrates with their Google Calendars."
        paragraph2="We later observed that users were frustrated with the redundancy of having both a calendar view and a list view of meetings side by side. To streamline the experience, we merged the two views into a single unified meeting timeline that combines the strengths of both."
      />

      <MediaDisplay
        src="/clarity-project/clarity-calendar.mp4"
        caption="Integrated calendar view"
        video={true}
      />

      <MediaDisplay
        src="/clarity-project/home-page-redesign.mp4"
        caption="Single unified meeting timeline"
        video={true}
      />
    </div>
  );
}
