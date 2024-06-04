import { IResume, resumeData } from '../../database/resume'

const Resume = () => {
  return (
    <>
      <section id="resume" className="inner resume">
        <div className="content__block block-large">
          <p className="h2__subtitle animate-in-up">
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
            <span>Resume</span>
          </p>
          <h2 className="h2__title animate-in-up">Educação e experiência prática</h2>
          <p className="h2__text animate-in-up">
            Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas na Uniritter, onde estou aprimorando meus
            conhecimentos em diversas áreas da tecnologia da informação. Minha formação é complementada por uma ampla
            gama de cursos com certificação em desenvolvimento mobile e frontend. Esses cursos me proporcionaram uma
            base sólida em linguagens de programação, frameworks e práticas de desenvolvimento ágil, permitindo-me criar
            soluções inovadoras e eficientes para problemas complexos.
          </p>
        </div>

        <div className="content__block block-large">
          <div className="section-h3">
            <h3 className="h3__title animate-in-up">Minha educação</h3>
          </div>

          <div className="container-fluid p-0 resume-lines">
            <div className="row g-0 resume-lines__item animate-in-up">
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">2018 - 2020</span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">Faculdade Senac</h5>
                <p className="resume-lines__source animate-in-up">Desenvolvimento Web</p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  Durante minha formação, desenvolvi habilidades práticas em programação, design responsivo, e
                  integração de sistemas, o que me capacitou a criar soluções web eficientes e de alta qualidade. Minha
                  educação no Senac, combinada com minha experiência prática, me permite enfrentar desafios técnicos com
                  confiança e inovação.
                </p>
              </div>
            </div>
            <div className="row g-0 resume-lines__item animate-in-up">
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">2021 - 2022</span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">Escola Técnica QI</h5>
                <p className="resume-lines__source animate-in-up">UI/UX Design</p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  Essa formação me capacitou a abordar o design de uma perspectiva centrada no usuário, garantindo que
                  as soluções que desenvolvo não sejam apenas funcionalmente robustas, mas também agradáveis e fáceis de
                  usar.
                </p>
              </div>
            </div>
            <div className="row g-0 resume-lines__item animate-in-up">
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">2023 - Atualmente</span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">Faculdade Uniritter</h5>
                <p className="resume-lines__source animate-in-up">Analise e Desenvolvimento de Sistemas</p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  Esta formação está me proporcionando uma base sólida em linguagens de programação, desenvolvimento de
                  sistemas, e práticas de desenvolvimento ágil, preparando-me para enfrentar os desafios do mercado de
                  trabalho com inovação e eficiência.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content__block">
          <div className="section-h3 section-h3-grid">
            <h3 className="h3__title animate-in-up">Minhas ferramentas favoritas</h3>
          </div>
        </div>

        <div className="content__block grid-block block-large">
          <div className="tools-cards d-flex justify-content-start flex-wrap">
            {resumeData.map((item: IResume, index: number) => (
              <div className="tools-cards__item d-flex grid-item-s animate-card-5" key={index}>
                <div className="tools-cards__card">
                  <img className="tools-cards__icon animate-in-up" src={item.icon} alt="Tools Icon" />
                  <h6 className="tools-cards__caption animate-in-up">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
