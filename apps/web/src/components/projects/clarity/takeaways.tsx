import MediaDisplay from "../media-display";
import SectionOverview from "../section-overview";

export default function Takeaways() {
  return (
    <>
      <SectionOverview
        title="The Journey"
        paragraph1="Working at Clarity alongside such great team members has been a transformative experience. We have accomplished so much in such a short time, and I strongly believe that we are expiditing innovation in the meeting notetaking space."
        paragraph2="Clarity has taught me so much about building products that people love and using a vigorous process to test and iterate on product and design ideas."
        paragraph3="To our users, the Claritons – thank you for your dedication to innovation and for trusting us to be part of your journey. Your work continues to inspire and drive us forward."
      />
      <MediaDisplay
        src="/clarity-project/bird-rock.png"
        caption="The Clarity team conquering Bird Rock during our San Diego offsite, 2024"
        video={false}
      />
    </>
  );
}
