import CV from '../../assets/pdf/CristianoBorges.pdf'
import WorkExperience from '../../components/WorkHistory'
import workHistory, { WorkHistoryItem } from '../../database/workHistory'
import * as S from './styles'

const About = () => {
  return (
    <>
      <section id="about" className="inner about">
        <div className="content__block section-grid-title">
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
            <span>Sobre mim</span>
          </p>
          <h2 className="h2__title animate-in-up">Transformando problemas complexos em design simples</h2>
        </div>

        <div className="content__block grid-block">
          <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
            <div className="achievements__item d-flex flex-column grid-item animate-card-3">
              <div className="achievements__card">
                <p className="achievements__number">+4</p>
                <p className="achievements__descr">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content__block grid-block block-large">
          <div className="container-fluid p-1">
            <S.Content className=" g-0 justify-content-between">
              <div className="col-12 col-xl-8 grid-item about-descr">
                <p className="about-descr__text animate-in-up">
                  Sou desenvolvedor frontend com especialização em React Native e ReactJs. Eu sou apaixonado por
                  programação desde sempre, e tenho trabalhado na área há mais de 4 anos. Durante minha carreira, tenho
                  me concentrado em garantir a organização, pontualidade e dedicação no meu trabalho. Acredito que esses
                  são fatores essenciais para um desenvolvedor front-end de sucesso, especialmente em projetos que
                  envolvem prazos apertados e muitas demandas diferentes.
                </p>
                <p className="about-descr__text animate-in-up">
                  Além disso, também valorizo a importância de trabalhar em equipe, colaborando com colegas de forma
                  eficiente e eficaz. Estou sempre procurando maneiras de me desenvolver como profissional e como
                  pessoa, e acredito que essas atividades pessoais me ajudam a manter a mente clara e focada, além de me
                  tornar uma pessoa mais equilibrada.
                </p>
                <div className="btn-group about-descr__btnholder animate-in-up">
                  <a
                    className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                    href={CV}
                    download="Cristiano Borges"
                  >
                    <span className="btn-caption">Download CV</span>
                    <i className="ph-bold ph-download-simple"></i>
                  </a>
                </div>
              </div>

              <div className="col-12 col-xl-4 grid-item about-info">
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Nome</small>
                    Cristiano Borges
                  </h6>
                </div>
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Telefone</small>
                    <a className="text-link-bold" href="tel:+12127089400">
                      51 99888-4446
                    </a>
                  </h6>
                </div>
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Email</small>
                    <a
                      className="text-link-bold"
                      href="mailto:cristianovieirati@gmail.com?subject=Message%20from%20your%20site"
                    >
                      cristianovieirati@gmail.com
                    </a>
                  </h6>
                </div>
                <div className="about-info__item animate-in-up">
                  <h6>
                    <small className="top">Localização</small>
                    <a
                      className="text-link-bold"
                      href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Porto Alegre - RS
                    </a>
                  </h6>
                </div>
              </div>
            </S.Content>
          </div>
        </div>

        <div className="content__block grid-block">
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-stretch cards">
              {workHistory.map((job: WorkHistoryItem) => (
                <WorkExperience
                  key={job.id}
                  id={job.id}
                  image={job.image}
                  company={job.company}
                  position={job.position}
                  period={job.period}
                  description={job.description}
                  tagOne={job.tagOne}
                  tagTwo={job.tagTwo}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
