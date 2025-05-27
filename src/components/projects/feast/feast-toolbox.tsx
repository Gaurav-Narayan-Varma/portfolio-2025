import Toolbox from "@/app/projects/toolbox";
import SectionOverview from "@/components/projects/section-overview";

const feastTools = [
  {
    label: "Next.js",
    logo: "/logos/nextjs-logo.png",
    description:
      "A React framework for building server-side rendered (SSR) web applications.",
  },
  {
    label: "TypeScript",
    logo: "/logos/typescript-logo.png",
    description:
      "A statically typed programming language that builds on JavaScript, adding optional static typing.",
  },
  {
    label: "Tailwind CSS",
    logo: "/logos/tailwind-logo.png",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },
];

export default function FeastToolbox() {
  return (
    <>
      <SectionOverview
        title="Toolbox"
        paragraph1="I built the app using Next.js, TypeScript, and Tailwind CSS. I also used Supabase for authentication and database, and Stripe for payments."
      />

      <Toolbox tools={feastTools} />
    </>
  );
}
