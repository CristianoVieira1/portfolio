import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import ME from "../../assets/photo.jpg";
import CTA from "./CTA";
import HeaderSociais from "./HeaderSociais";

import Background from "../background/index";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderBg>
      <div className="container header__container">
        <h5>Olá eu sou</h5>
        <h1>Cristiano Borges</h1>
        <h5 className="text-light">Desenvolvedor front-end</h5>
        <CTA />
        <HeaderSociais />

        <S.MeImg>
          <S.Image src={ME} alt="Cristiano Borges" />
        </S.MeImg>

        <S.Scroll about="#about">
          <FaAngleDoubleDown className="Icon" />
        </S.Scroll>
      </div>
      <Background />
    </S.HeaderBg>
  );
};

export default Header;
