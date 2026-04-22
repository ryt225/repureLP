import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Empathy } from "@/components/sections/Empathy";
import { WhatIs } from "@/components/sections/WhatIs";
import { WEffect } from "@/components/sections/WEffect";
import { Merits } from "@/components/sections/Merits";
import { Change } from "@/components/sections/Change";
import { Trial } from "@/components/sections/Trial";
import { Support } from "@/components/sections/Support";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyBar } from "@/components/ui/StickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Empathy />
        <WhatIs />
        <WEffect />
        <Merits />
        <Change />
        <Trial />
        <Support />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
