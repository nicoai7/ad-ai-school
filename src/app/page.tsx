import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearnPoints from "@/components/LearnPoints";
import Problem from "@/components/Problem";
import WhyAgency from "@/components/WhyAgency";
import Solution from "@/components/Solution";
import Steps from "@/components/Steps";
import Market from "@/components/Market";
import Proof from "@/components/Proof";
import NotJustSideHustle from "@/components/NotJustSideHustle";
import WebinarPreview from "@/components/WebinarPreview";
import Urgency from "@/components/Urgency";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-24 sm:pb-20">
        <Hero />
        <LearnPoints />
        <Problem />
        <WhyAgency />
        <Solution />
        <Steps />
        <Market />
        <Proof />
        <NotJustSideHustle />
        <WebinarPreview />
        <Urgency />
        <FinalCTA />
        <FAQ />
      </main>
      <FloatingCTA />
    </>
  );
}
