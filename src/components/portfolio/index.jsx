import React from "react";

import { portData } from "./data";

import { PortfolioContainer, PortLinks } from "./style";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Trabalhos recentes</h5>
      <h2>Portfolio</h2>
      <PortfolioContainer className="container">
        {portData.map(({ id, video, title, github, demo }) => {
          return (
            <article key={id}>
              <div>
                <video src={video} controls={false} muted autoPlay={true} loop>
                  {" "}
                  something
                </video>
              </div>
              <h3>{title}</h3>
              <PortLinks>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </PortLinks>
            </article>
          );
        })}
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;
