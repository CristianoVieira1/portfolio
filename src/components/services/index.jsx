import React from 'react'
import { BiCheck } from 'react-icons/bi';

import { uxData } from './data';
import { ServicesContainer } from './style';

const Services = () => {
  return (
    <section id='services'>
      <h5>Designer</h5>
      <h2>Conhecimentos</h2>

      <ServicesContainer className="container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Designer</h3>
          </div>
          {uxData.map(({id, description}) => {
        return (
          <ul className="service__list" key={id}>
            <li>
              <BiCheck className="service__list_icon" />
              <p>{description}</p>
            </li>
          </ul>
        );
      })}


        </article>
        {/* end of  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developer</h3>
          </div>

          {uxData.map(({id, description}) => {
        return (
          <ul className="service__list" key={id}>
            <li>
              <BiCheck className="service__list_icon" />
              <p>{description}</p>
            </li>
          </ul>
        );
      })}
        </article>
        {/* Web Developer */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          {uxData.map(({id, description}) => {
        return (
          <ul className="service__list" key={id}>
            <li>
              <BiCheck className="service__list_icon" />
              <p>{description}</p>
            </li>
          </ul>
        );
      })}
        </article>
        {/* Content Creation  */}
      </ServicesContainer>
    </section>

  )
}

export default Services
