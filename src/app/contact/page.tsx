"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const contactInfoItems = [
  {
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
    value: "/gaurav-varma-fullstack-engineer",
    href: "https://www.linkedin.com/in/gaurav-varma-fullstack-engineer",
  },
  {
    icon: "/icons/location.svg",
    label: "Location",
    value: "San Francisco",
    href: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIG0iG1SNA7RsryE2G6ucTL4zbNsEolujOulgOwkehZTraTMyiNN0E9Dr3peWGtOxw4r5jgdgiBoP-OWY8DgFG8FcY7wlz_zVaxBE0RSvTtEOeCQ5YhScu-4bwyw1fXZED6hyphenhyphenxwaUoGXOz/s900/Edit-San-Francisco-German-Tour-0132.JPG",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<z.infer<typeof contactFormSchema>>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function submitContactForm(e: React.MouseEvent<HTMLButtonElement>) {
    // e.preventDefault();
    setError(null);
    setIsLoading(true);

    const result = contactFormSchema.safeParse({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    if (!result.success) {
      setError(result.error.issues[0].message);

      return;
    }

    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setIsLoading(false);
  }

  return (
    <div className="animate-fade-in h-screen flex flex-col justify-center w-full items-center">
      <div className="px-12 py-18 flex flex-col gap-12 w-full max-w-[800px] items-start">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="page-title">Get in touch</div>
          <div className="page-subtitle">Let's connect, just reach out!</div>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full">
          {error && (
            <Alert className="mb-6 border-red-500 border-[0.5px]">
              <AlertCircle className="h-4 w-4 stroke-red-600 stroke-1" />
              <AlertDescription className="text-red-600 font-light">
                {error}
              </AlertDescription>
            </Alert>
          )}
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-[#242424] border-0 h-11"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Email"
              required
              className="w-full bg-[#242424] border-0 h-11"
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex gap-3">
            <Textarea
              placeholder="Message"
              required
              className="w-full bg-[#242424] border-0 h-40"
              value={formData?.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <Button
            type="submit"
            variant="default"
            className="w-full bg-[#e0e0e0] text-black font-semibold text-sm h-11 hover:bg-[#b7b7b7]"
            onClick={(e) => submitContactForm(e)}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {/* Footer */}
        <div className="flex flex-col gap-6 w-full">
          <div>Contact Info</div>
          <div className="flex flex-col gap-4">
            {contactInfoItems.map((contactInfoItem) => (
              <ContactInfoItem
                key={contactInfoItem.label}
                contactInfoItem={contactInfoItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({
  contactInfoItem,
}: {
  contactInfoItem: (typeof contactInfoItems)[number];
}) {
  return (
    <div className="flex gap-4 w-full">
      <div className="flex gap-2">
        <img
          src={contactInfoItem.icon}
          alt={contactInfoItem.label}
          width={16}
          height={16}
        />
        <div>{contactInfoItem.label}</div>
      </div>
      <div className="border-.5 border-b border-white/12 border-dashed self-center flex-1" />
      <a
        href={contactInfoItem.href}
        target="_blank"
        className="text-white/60 cursor-default hover:text-white hover:underline"
      >
        {contactInfoItem.value}
      </a>
    </div>
  );
}
