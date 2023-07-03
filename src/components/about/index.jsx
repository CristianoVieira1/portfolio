import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/about-me.png";

import { AboutContainer, AboutContent } from "./style";
const About = () => {
  return (
    <section id="about">
      <h5>Qualificações</h5>
      <h2>Sobre mim</h2>

      <AboutContainer className="container ">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Cristiano Borges" />
          </div>
        </div>

        <AboutContent>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>4 anos</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Desenvolvedor Web</h5>
              <small>React</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Desenvolvedor Mobile</h5>
              <small>React Native</small>
            </article>
          </div>

          <p className="about__description">
            Sou desenvolvedor front-end com especialização em React Native e
            ReactJs. Eu sou apaixonado por programação desde sempre, e tenho
            trabalhado na área há 4 anos. Durante minha carreira, tenho me
            concentrado em garantir a organização, pontualidade e dedicação no
            meu trabalho. Acredito que esses são fatores essenciais para um
            desenvolvedor front-end de sucesso, especialmente em projetos que
            envolvem prazos apertados e muitas demandas diferentes. Além disso,
            também valorizo a importância de trabalhar em equipe, colaborando
            com colegas de forma eficiente e eficaz. Estou sempre procurando
            maneiras de me desenvolver como profissional e como pessoa, e
            acredito que essas atividades pessoais me ajudam a manter a mente
            clara e focada, além de me tornar uma pessoa mais equilibrada.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contato
          </a>
        </AboutContent>
      </AboutContainer>
    </section>
  );
};

export default About;
