import React from 'react';
import {FaAngleDoubleDown} from 'react-icons/fa';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSociais from './HeaderSociais';

import { HeaderBg, MeImg, Scroll } from './style';
import Background from '../background/index';

const Header = () => {
  return (
    <HeaderBg>
      <div className="container header__container">
          <h5>Olá eu sou</h5>
          <h1>Cristiano Borges</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CTA />
          <HeaderSociais />

          <MeImg>
            <img src={ME} alt="Cristiano Borges" />
          </MeImg>

          <Scroll about="#contact"><FaAngleDoubleDown /></Scroll>
      </div>
         <Background />
    </HeaderBg>
  )
}

export default Header
