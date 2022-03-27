import React from 'react';
import CV from '../../assets/cv.pdf';

import { CTA_HEA } from './style';

const CTA = () => {
  return (
    <CTA_HEA>
      <a href={CV} download='Cristiano Borges' className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
    </CTA_HEA>
  )
}

export default CTA
