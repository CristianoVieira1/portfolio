import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

import { Sociais } from './style';

const HeaderSociais = () => {
  return (

    <Sociais>
      <a href="https://www.linkedin.com/in/cristianobv/" rel="noreferrer" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/CristianoVieira1" rel="noreferrer" target='_blank'><FaGithub /></a>
    </Sociais>
  )
}

export default HeaderSociais
