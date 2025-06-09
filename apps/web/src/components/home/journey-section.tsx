type Milestone =
  | {
      image: string;
      company: string;
      role: string;
      duration: string;
      type: "single";
    }
  | {
      image: string[];
      company: string;
      role: string;
      duration: string;
      type: "multiple";
    };

const milestones: Milestone[] = [
  {
    image: "/logos/clarity-logo.jpeg",
    company: "Clarity",
    role: "Founding Engineer",
    duration: "2024 - Present",
    type: "single",
  },
  {
    image: [
      "/logos/yhangry-logo.jpeg",
      "/logos/fleek-logo.jpeg",
      "/logos/dgcl-logo.png",
    ],
    company: "Yhangry, Fleek, DGCL",
    role: "Freelance Engineer",
    duration: "2022 - 2024",
    type: "multiple",
  },
  {
    image: "/logos/flatiron-logo.jpeg",
    company: "Flatiron School",
    role: "Engineering Graduate",
    duration: "2021 - 2022",
    type: "single",
  },
  {
    image: "/logos/liberty-logo.jpeg",
    company: "Liberty Mutual",
    role: "Associate Consultant",
    duration: "2020 - 2021",
    type: "single",
  },
  {
    image: "/logos/dartmouth-logo.jpeg",
    company: "Dartmouth College",
    role: "Economics",
    duration: "2016 - 2020",
    type: "single",
  },
];

export default function JourneySection() {
  return (
    <div className="flex flex-col gap-12 py-12 px-5 md:px-10 lg:px-12">
      <div className="flex flex-col gap-8">
        <div className="text-white/60 font-medium text-base -tracking-[0.16] leading-7">
          My Journey
        </div>
        <div className="text-white text-base leading-7 -tracking-[0.16] font-medium">
          While I work as an engineer, my true passion lies in product
          development - from understanding user needs and delivering impactful
          features to strategic planning. Currently, I serve as a founding
          engineer at{" "}
          <a
            href="https://www.adoptclarity.com/"
            className="hyperlink"
            target="_blank"
          >
            Clarity
          </a>
          , a startup focused on innovating AI note taking technology.
          <br />
          <br />
          Previously, I was a full stack engineer at top startups, from{" "}
          <a className="hyperlink" href="https://yhangry.com/" target="_blank">
            Yhangry
          </a>{" "}
          to{" "}
          <a
            href="https://www.joinfleek.com/home"
            className="hyperlink"
            target="_blank"
          >
            Fleek
          </a>
          , where I led the development of Fleek&apos;s gift card system
          end-to-end. Before that, I consulted C-Suite leaders at{" "}
          <a
            className="hyperlink"
            href="https://www.libertymutual.com/"
            target="_blank"
          >
            Liberty Mutual
          </a>{" "}
          on integrating AI into their business.
          <br />
          <br />I studied Economics at{" "}
          <a
            className="hyperlink"
            href="https://home.dartmouth.edu"
            target="_blank"
          >
            Dartmouth College
          </a>
          , which is where I discovered my passion for understanding human
          decision-making, and how technology can meaningfully improve
          people&apos;s lives.
        </div>
      </div>
      <div>
        {milestones.map((milestone, i) => (
          <Milestone key={i} milestone={milestone} />
        ))}
      </div>
    </div>
  );
}

function Milestone({ milestone }: { milestone: Milestone }) {
  return (
    <div className="flex py-3 gap-4">
      <div className="flex gap-2.5 items-center">
        {milestone.type === "multiple" ? (
          <div className="flex -space-x-2.5">
            {milestone.image.map((img, i) => (
              <CompanyLogo
                key={i}
                index={i}
                company={
                  Array.isArray(milestone.company)
                    ? milestone.company[i]
                    : milestone.company
                }
                image={img}
              />
            ))}
          </div>
        ) : (
          <CompanyLogo
            index={0}
            company={milestone.company}
            image={milestone.image}
          />
        )}
        <div>{milestone.company}</div>
      </div>
      <div className="border-b border-dashed border-white/[.12] flex-grow self-center" />
      <div className="flex flex-col gap-1 items-end md:flex-row md:gap-4">
        <div className="text-white/70 text-[15px] leading-[26.25px] -tracking-[0.15px] font-medium max-[400px]:w-32 truncate text-end">
          {milestone.role}
        </div>
        <div className="text-white/40 text-[15px] leading-[26.25px] -tracking-[0.15px] font-medium">
          {milestone.duration}
        </div>
      </div>
    </div>
  );
}

function CompanyLogo({
  index,
  company,
  image,
}: {
  index: number;
  company: string;
  image: string;
}) {
  return (
    <img
      src={image}
      alt={company}
      className="w-6.5 h-6.5 rounded-full bg-white ring-ds-gray-500 ring-1"
      style={{
        zIndex: -index,
      }}
    />
  );
}
