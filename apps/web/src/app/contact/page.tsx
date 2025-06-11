"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, MapPin } from "lucide-react"; // Added Lucide icons
import { useState } from "react";
import { toast } from "react-hot-toast";

const contactInfoItems = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/gaurav-varma-fullstack-engineer",
    href: "https://www.linkedin.com/in/gaurav-varma-fullstack-engineer",
  },
  {
    icon: MapPin,
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />

      <div className="relative animate-fade-in max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Let&apos;s Create Together
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Open for exciting opportunities and innovative collaborations.
            Let&apos;s turn ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form Section */}
          <div className="lg:col-span-3 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400">Your Name</label>
                  <Input
                    type="text"
                    required
                    className="bg-white/5 border-white/10 rounded-lg h-12 focus-visible:ring-2 focus-visible:ring-purple-400/50 transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400">Your Email</label>
                  <Input
                    type="email"
                    required
                    className="bg-white/5 border-white/10 rounded-lg h-12 focus-visible:ring-2 focus-visible:ring-purple-400/50 transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Your Message</label>
                <Textarea
                  required
                  className="bg-white/5 border-white/10 rounded-lg h-48 focus-visible:ring-2 focus-visible:ring-purple-400/50 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <Button
                label="Send Message"
                type="submit"
                className="w-full text-white font-semibold h-12 rounded-lg hover:opacity-90 transition-all bg-gradient-to-r from-purple-500 to-blue-500"
                isLoading={isLoading}
                leftIcon={<Mail className="w-4 h-4" />}
              />
            </form>
          </div>

          {/* Contact Info Section - Now on the left */}
          <div className="lg:col-span-2 space-y-8">
            <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
              <h2 className="text-2xl font-semibold mb-8">Connect With Me</h2>
              <div className="space-y-6">
                {contactInfoItems.map((item) => (
                  <div
                    key={item.label}
                    className="group hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
