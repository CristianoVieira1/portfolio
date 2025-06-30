import CV from "../../assets/pdf/CristianoBorges.pdf";
import Avatar from "../../components/Avatar";
import Header from "../../components/Header";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="gradient-background">
        <div className="blur"></div>
        <div className="blur"></div>
        <div className="blur"></div>
      </div>

      <Avatar />

      <div id="content" className="content">
        <div className="content__wrapper">
          <section id="home" className="main intro">
            <div
              id="headline"
              className="headline d-flex align-items-start flex-column"
              data-speed="1"
            >
              <p className="headline__subtitle animate-headline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="13px"
                  height="13px"
                  viewBox="0 0 13 13"
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
                  />
                </svg>
                <span>Especialista em React Native</span>
              </p>
              <h1 className="headline__title animate-headline">
                Cristiano Borges
                <br />
                Desenvolvedor React Native
              </h1>
              <p className="headline__description animate-headline">
                Sou desenvolvedor <strong>React Native</strong> com ampla
                experiência em criação de aplicativos móveis para{" "}
                <strong>Android</strong> e <strong>iOS</strong>.
                <br />
                <strong>
                  Precisa de um app mobile de verdade? Vamos conversar e
                  transformar sua ideia em realidade!
                </strong>
              </p>
              <div className="headline__btnholder d-flex flex-column flex-sm-row">
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
                  href="#portfolio"
                >
                  <span className="btn-caption">Ver projetos</span>
                  <i className="ph-bold ph-squares-four"></i>
                </a>
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline"
                  href={CV}
                  download="Cristiano Borges"
                >
                  <span className="btn-caption">Baixar CV</span>
                  <i className="ph-bold ph-download-simple"></i>
                </a>
              </div>
            </div>

            <div className="rotating-btn">
              <a href="#portfolio" className="rotating-btn__link slide-down">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="animate-rotation"
                  data-value="360"
                >
                  <defs>
                    <path
                      id="textPath"
                      d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"
                    />
                  </defs>
                  <g>
                    <use xlinkHref="#textPath" fill="none"></use>
                    <text>
                      <textPath xlinkHref="#textPath">
                        Role para ver mais * Role para ver mais *{" "}
                      </textPath>
                    </text>
                  </g>
                </svg>
                <i className="ph-bold ph-arrow-down"></i>
              </a>
            </div>
          </section>

          {/* Portfólio */}
          <Portfolio />

          {/* Sobre */}
          <About />

          {/* Currículo */}
          <Resume />

          {/* Contato */}
          <Contact />
        </div>
      </div>
    </>
  );
};
