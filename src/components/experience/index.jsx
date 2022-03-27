import React from "react";
// import { BsPatchCheckFill } from 'react-icons/bs';
import { FrontCard } from "./FrontCard";
import { BackCard } from "./BackCard";
// eslint-disable-next-line no-unused-vars
import { ContainerExp, FrontEnd, BackEnd } from "./style";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Minhas habilidades</h5>
      <h2>Minhas experiências</h2>

      <div className="container">
        <ContainerExp>
          <FrontEnd>
            <h3>Front End Developer</h3>
            <FrontCard />
          </FrontEnd>
          <BackEnd>
            <h3>Back End Developer</h3>
            <BackCard />
          </BackEnd>
        </ContainerExp>
      </div>
    </section>
  );
};
export default Experience;
