import About from "@/components/common/About";
import Contact from "@/components/common/Contact";
import Experiences2 from "@/components/common/Experiences2";
import HireSeoSection from "@/components/common/HireSeoSection";
import Portofolio from "@/components/common/Portfolio";
import ProjectCta from "@/components/common/ProjectCta";
import Skills from "@/components/common/Skills";
import TechStackSection from "@/components/common/TechStackSection";
import TextAnim from "@/components/common/TextAnim";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Experience from "@/components/homes/home-2/Experience";
import Hero from "@/components/homes/home-2/Hero";

import MetaComponent from "@/components/common/Metacomponent";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function HomePage2() {
  const { lang } = useLanguage();
  const metadata = {
    title:
      lang === "pt"
        ? "Desenvolvedor React Native Freelancer | Cristiano Borges"
        : "Freelance React Native Developer | Cristiano Borges",
    description:
      lang === "pt"
        ? "Contrate um desenvolvedor React Native sênior para apps iOS e Android. Freelancer e PJ remoto no Brasil, com React, Next.js e mais de 6 anos de experiência."
        : "Hire a senior React Native developer for iOS and Android apps. Available for remote freelance and contract work, with React, Next.js and 6+ years of experience.",
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <a className="skip-link" href="#main">
        {translations.a11y.skipToContent[lang]}
      </a>
      <Header1 />
      <main id="main">
        <Hero />
        <TextAnim />
        <About />
        <ProjectCta />
        <HireSeoSection />
        <Experience />
        <Skills />
        <Portofolio />
        <Experiences2 />
        <TechStackSection />
        <Contact />
      </main>
      <Footer2 />
      <Copyright />
    </>
  );
}
