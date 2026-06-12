import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Hero } from "@/components/sections/Hero";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { About } from "@/components/sections/About";
import { Trajectory } from "@/components/sections/Trajectory";
import { Videos } from "@/components/sections/Videos";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: `${profile.name} — Profile`,
  description: profile.tagline,
};

export default function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
      <Hero />
      <MetricsStrip />
      <div className="mt-8 space-y-8">
        <About />
        <Trajectory />
        <Videos />
        <Contact />
      </div>
    </main>
  );
}
