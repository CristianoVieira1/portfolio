import About from "@/components/common/About";
import Contact from "@/components/common/Contact";
import Experiences2 from "@/components/common/Experiences2";
import Portofolio from "@/components/common/Portfolio";
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

const metadata = {
  title: "Cristiano Borges | Desenvolvedor React Native Sênior",
  description:
    "Portfólio de Cristiano Borges, desenvolvedor React Native com mais de 6 anos de experiência em aplicativos iOS, Android e produtos web.",
};

export default function HomePage2() {
  const { lang } = useLanguage();

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
