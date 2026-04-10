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

const metadata = {
  title: "Cristiano Borges | Desenvolvedor React Native, React e Next.js",
  description:
    "Desenvolvedor freelancer especializado em aplicativos mobile com React Native e aplicações web com React e Next.js.",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <Hero />
      <TextAnim />
      <About />
      <Experience />
      <Skills />
      <Portofolio />
      <Experiences2 />
      <TechStackSection />
      <Contact />
      <Footer2 />
      <Copyright />
    </>
  );
}
