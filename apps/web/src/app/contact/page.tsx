"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    toast.success("Message sent successfully!");

    setIsLoading(false);
  }

  return (
    <div className="min-h-screen">
      <div className="animate-fade-in max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section with improved styling */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Let&apos;s Connect
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <p className="text-lg">Open for opportunities and collaborations</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 text-white border-zinc-700">
                  Built with Resend
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  required
                  className="bg-white/5 border-white/10 rounded-lg h-12 focus-visible:ring-2 focus-visible:ring-white/20 transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-white/5 border-white/10 rounded-lg h-12 focus-visible:ring-2 focus-visible:ring-white/20 transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <Textarea
                placeholder="Your message"
                required
                className="bg-white/5 border-white/10 rounded-lg h-48 focus-visible:ring-2 focus-visible:ring-white/20 transition-all resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold h-12 rounded-lg hover:opacity-90 transition-all"
                disabled={isLoading}
                label={isLoading ? "Sending..." : "Send Message"}
              />
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-8 text-white">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfoItems.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                      <img
                        src={item.icon}
                        alt={item.label}
                        width={20}
                        height={20}
                        className="opacity-70 group-hover:opacity-100"
                      />
                    </div>
                    <span className="text-gray-400 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                  <div className="border-t border-white/10 flex-1 mx-4" />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white truncate transition-all"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}