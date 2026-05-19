import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Hero />
      <Timeline />
      <About />
      <Contact />
      <div className="h-12" />
    </main>
  );
}
