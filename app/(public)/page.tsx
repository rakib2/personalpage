import { StatusBar } from "@/components/hud/StatusBar";
import { Hero } from "@/components/sections/Hero";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { About } from "@/components/sections/About";
import { Papers } from "@/components/sections/Papers";
import { Videos } from "@/components/sections/Videos";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <StatusBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
        <Hero />
        <MetricsStrip />
        <div className="mt-8 space-y-8">
          <About />
          <Papers />
          <Videos />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
