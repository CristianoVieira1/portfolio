import React from "react";
// import { BsPatchCheckFill } from 'react-icons/bs';
import { FrontCard } from "./FrontCard";
// eslint-disable-next-line no-unused-vars
import { ContainerExp, FrontEnd } from "./style";

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
        </ContainerExp>
      </div>
    </section>
  );
};
export default Experience;
