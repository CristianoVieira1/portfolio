import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/about-me1.png";

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
              <small>
                Desenvolvedor <br /> Full-Stack
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Front-End</h5>
              <small>React</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Front-End</h5>
              <small>React Native</small>
            </article>
          </div>

          <p>
            Além da minha base de conhecimento, busco ativamente novas
            tecnologias e me mantenho atualizado sobre tendências e avanços do
            setor. Isso permitiu-me ficar à frente da curva e entregar um
            trabalho excepcional a todos os meus empregadores, incluindo aqueles
            para quem trabalhei em projetos.
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
