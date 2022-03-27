/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";

import { FooterContainer, Sociais, Copyright } from './style';

const Footer = () => {
  return (
    <FooterContainer>
      <a href="#" className="logo">Cristiano Borges</a>

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Experiência</a></li>
        <li><a href="">Serviços</a></li>
        <li><a href="">Contato</a></li>
      </ul>

      <Sociais>
        <a href="https://github.com/CristianoVieira1" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/cristianobv/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
      </Sociais>

      <Copyright>
        <small>&copy; Cristiano Borges. Developer Fullstack</small>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
