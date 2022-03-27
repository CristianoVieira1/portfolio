/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import {  BiBook, BiMessageSquareDetail } from 'react-icons/bi';

import { NavBar } from './style'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <NavBar>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </NavBar>
  )
}

export default Nav
