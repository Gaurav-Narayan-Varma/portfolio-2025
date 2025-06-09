import { index } from "../src/utils/pinecone.ts";

const records = [
  {
    _id: "rec1",
    chunk_text:
      "Hey, I'm Gaurav. I build software. I've built products from 0 to 1 that have impacted thousands of peoples' lives. I care deeply about craft, product excellence, and the impact of my work. Currently, I build as a founding engineer at Clarity in San Francisco. Previously, I've built products at Yhangry and Fleek.",
    category: "overview",
  },
  {
    _id: "rec2",
    chunk_text:
      "Who Gaurav is. I'm an engineer by trade, but I'm most passionate about building great products, whether that's listening to users, shipping features, or project planning. Right now, I build as a founding engineer at Clarity, a startup focused on innovating AI note taking technology. Previously, I was a full stack engineer at top startups, from Yhangry to Fleek, where I led the development of Fleek's gift card system end-to-end. Before that, I consulted C-Suite leaders at Liberty Mutual on integrating AI into their business. Once upon a time, I studied Economics at Dartmouth College. That's where I discovered my passion for understanding human decision-making, and how technology can meaningfully improve people's lives.",
    category: "overview",
  },
  {
    _id: "rec3",
    chunk_text:
      "Clarity: Desktop Web App. Gaurav's role: Founding Engineer. I've spent the past year building the future of meeting intelligence at Clarity in SF. We're focused on helping high-performance operators capture and leverage every detail from their meetings through AI-powered transcription, actionable insights, and seamless integrations.",
    category: "clarity",
  },
  {
    _id: "rec4",
    chunk_text:
      "Meeting Timeline feature. When Gaurav joined, users had to constantly switch between their calendars and Clarity to manage meetings. I solved this by building an integrated calendar view, consolidating all meeting management capabilities directly into the platform. Based on user feedback showing redundancy between calendar and list views, I redesigned the experience into a unified timeline that offered the best of both interfaces.",
    category: "clarity",
  },
  {
    _id: "rec5",
    chunk_text:
      "Onboarding feature. After launching Clarity calendar, we discovered a critical issue: users weren't using it because the Google Calendar setup was buried in settings. Gaurav tackled this by building an interactive onboarding flow that guides users through essential product features. Through continuous user feedback, I refined the experience into a streamlined three-step process. This improved approach laid the groundwork for Clarity's successful public launch.",
    category: "clarity",
  },
  {
    _id: "rec6",
    chunk_text:
      "Clarity Emails feature. Gaurav built Clarity's automated post-meeting email system from scratch. After each meeting, users receive a summary with action items and key takeaways. I implemented the full infrastructure using Resend, including retry mechanisms and email templating. The feature significantly improved user engagement by making meeting outcomes easily shareable and actionable. Given its success, we leveraged the email infrastructure to power workspace invitations as well.",
    category: "clarity",
  },
  {
    _id: "rec7",
    chunk_text:
      "Clarity Template Library feature. Gaurav extended Clarity's call template system to support platform-wide templates. This new feature allows administrators to create and manage templates that are available to all users, complete with a tagging system for better organization and discoverability. The tagging system enables efficient template discovery and filtering, improving the platform's usability and scalability.",
    category: "clarity",
  },
  {
    _id: "rec8",
    chunk_text:
      "The Journey Working at Clarity alongside such great team members has been a transformative experience for Gaurav. We have accomplished so much in such a short time, and I strongly believe that we are expiditing innovation in the meeting notetaking space. Clarity has taught me so much about building products that people love and using a vigorous process to test and iterate on product and design ideas. To our users, the Claritons – thank you for your dedication to innovation and for trusting us to be part of your journey. Your work continues to inspire and drive us forward.",
    category: "clarity",
  },
  {
    _id: "rec9",
    chunk_text:
      "Feast: Chef Booking Platform. Gaurav's role: Founding Engineer. Building on my experience at Yhangry, a UK luxury chef marketplace, I partnered with Feast to create an affordable private chef platform for NYC, making healthy home dining accessible to everyday Americans. Through Feast, we're revolutionizing the culinary industry by enabling chefs to build thriving, independent careers while bringing the private dining experience to a broader audience.",
    category: "feast",
  },
  {
    _id: "rec10",
    chunk_text:
      "Background. As the sole engineer, Gaurav took ownership of a prototype that faced critical challenges with user authentication and onboarding flows. Essential features like scheduling, discovery, and booking were absent, requiring manual operational management through spreadsheets. The AI-generated codebase suffered from substantial technical debt, with poor maintainability and persistent bugs. I rebuilt it from scratch, implementing proper core functionality and adding fundamental features like an admin dashboard, scheduling engine, and end-to-end booking flow.",
    category: "feast",
  },
  {
    _id: "rec11",
    chunk_text:
      "Authentication feature. Previously, our authentication system lacked email verification during account creation, leaving the platform vulnerable to potential abuse. This security gap made it possible for malicious actors to create fake accounts, potentially preventing legitimate users from registering. Gaurav implemented email verification using Resend's service, generating time-bound tokens and including them in secure verification links. The enhanced system now validates user identities during registration and manages sessions through secure cookie-based authentication.",
    category: "feast",
  },
  {
    _id: "rec12",
    chunk_text:
      "Onboarding feature.The chef onboarding process consists of three critical steps: identity verification through Stripe's verification API, Stripe Connect account setup, and 1099 contract signing. Previously, chefs had to manually refresh their browser to track their progress through these steps, resulting in a disjointed user experience. Gaurav enhanced the process in two ways: First, I integrated Stripe webhooks to monitor ID verification status and update the onboarding flow in real-time. Second, I implemented a confirmation screen that captures the session ID from the callback URL after users complete their Stripe account setup, allowing for a seamless return to the updated onboarding flow.",
    category: "feast",
  },
  {
    _id: "rec13",
    chunk_text:
      "Admin Dashboard feature. Previously, Feast was tracking chef applications and approvals manually through spreadsheets, leading to a slow and frustrating process for chefs. Gaurav built the admin dashboard to automate this workflow, allowing the Feast team to efficiently monitor chef progress and streamline the approval process.",
    category: "feast",
  },
  {
    _id: "rec14",
    chunk_text:
      "Booking Flow feature.Previously, there was no booking flow. The platform was purely a directory of chefs. This is why Gaurav built the booking flow to allow users to book a chef for a specific date and time. After chefs complete the onboarding process and enter in their availability, including date overrides they specify, users can now see their profile on the chef marketplace and request a booking.",
    category: "feast",
  },
  {
    _id: "rec15",
    chunk_text:
      "Building Feast into a Multi-Product Platform. Gaurav's proudest achievement at Feast was scaling the product from a prototype for onboarding chefs, to an end-to-end platform for booking chefs - all within two weeks.",
    category: "feast",
  },
  {
    _id: "rec16",
    chunk_text:
      "Yhangry Gift Cards. Gaurav's role: Full Stack Engineer. Yhangry: Private Chef Marketplace. I led the development of Yhangry's gift card feature, creating a seamless experience for customers to purchase and redeem dining experiences. As a Full Stack Engineer, I architected both the frontend user experience and backend payment infrastructure to ensure secure and reliable gift card transactions.",
    category: "yhangry",
  },
  {
    _id: "rec17",
    chunk_text:
      "Problem Yhangry was faced with: Yhangry's popular private chef experiences could only be purchased directly, with no option to gift them to friends and family. This limitation reduced potential revenue during key gifting seasons. The lack of a gift card system forced customers into awkward payment-sharing workarounds or missing the opportunity entirely, leaving valuable gifting market potential untapped.",
    category: "yhangry",
  },
  {
    _id: "rec18",
    chunk_text:
      "Solution: Gaurav led the development of Yhangry's gift card system, building a secure payment infrastructure with Stripe's API and webhooks and integrating with Segment for purchase analytics. Key features included EU-compliant embedded checkout with Stripe Elements and automated digital gift card delivery via email.",
    category: "yhangry",
  },
  {
    _id: "rec19",
    chunk_text:
      "Gaurav's Impact: The gift card feature launch saw immediate success, with significant user engagement and purchase rates exceeding expectations. Strong customer adoption validated the demand for gifting options, leading to plans for expanding gift card functionality across more products and services.",
    category: "yhangry",
  },
  {
    _id: "rec20",
    chunk_text:
      "Gaurav is a full-stack engineer with a strong command of modern web development tools and frameworks. On the frontend, he uses React, TypeScript, and Tailwind CSS, with state management handled via TanStack Query, Zustand, and Redux. He’s also experienced with Vite, ShadCN UI, Radix UI, React Hook Form, TipTap for rich text editing, and TanStack Router. On the backend, Gaurav builds scalable services using Node.js, Express, and TypeScript, and he leverages PostgreSQL, Prisma, and Redis for robust data handling. He’s also worked with Socket.IO for real-time applications and BullMQ for background job processing, supported by solid testing practices using Jest. In full-stack and API development, Gaurav is proficient with Next.js, tRPC, Turborepo, and Zod for end-to-end type safety. He also has experience with Laravel and Ruby on Rails for full-stack applications. For infrastructure and DevOps, he’s comfortable with tools like Docker, Amazon EC2, Vercel, Render, GitHub Actions, and Coolify. He uses Amazon S3 for storage, Stripe for payments, Twilio for communications, and Resend for email delivery. Gaurav also utilizes Segment, FullStory, and Sentry for analytics and monitoring. His productivity stack includes Loom, Slack, Figma, Notion, Linear, GitHub, and Cursor AI.",
    category: "overview",
  },
  {
    _id: "rec21",
    chunk_text:
      "Gaurav decided to do software engineering because he loves building products that people love and also the complexity of the problems that he gets to solve.",
    category: "overview",
  },
  {
    _id: "rec22",
    chunk_text:
      "Outside of work, Gaurav is passionate about staying active through running, cherishes time with friends and family, has a weakness for pizza, and loves building side projects, with Feast being his current focus.",
    category: "overview",
  },
];

await index.upsertRecords(records);
