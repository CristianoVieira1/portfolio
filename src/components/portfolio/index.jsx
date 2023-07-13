import React from "react";

import { portData } from "./data";

import { PortfolioContainer, PortLinks } from "./style";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Alguns de meus projetos</h5>
      <h2>Portfolio</h2>
      <PortfolioContainer className="container">
        {portData.map(
          ({ id, img, title, github, demo, buttonOne, buttonTwo }) => {
            return (
              <article key={id}>
                <div>
                  <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <PortLinks>
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonOne}
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {buttonTwo}
                  </a>
                </PortLinks>
              </article>
            );
          }
        )}
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;
