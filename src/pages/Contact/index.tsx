const Contact = () => {
  return (
    <>
      <section id="contact" className="inner contact">
        <div className="content__block section-title">
          <p className="h2__subtitle  animate-in-up">
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
            <span>Contato</span>
          </p>
          <h2 className="h2__title  animate-in-up">Vamos fazer algo incrível juntos!</h2>
        </div>

        <div className="content__block grid-block block-grid-large">
          <div className="form-container">
            <div className="form__reply centered text-center">
              <i className="ph-bold ph-smiley reply__icon"></i>
              <p className="reply__title">Done!</p>
              <span className="reply__text">Thanks for your message. Il get back as soon as possible.</span>
            </div>

            <form className="form contact-form" id="contact-form">
              <input type="hidden" name="project_name" value="Starter Template" />
              <input type="hidden" name="form_subject" value="Contact Form Message" />
              <div className="container-fluid p-0">
                <div className="row gx-0 p-3">
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="text" name="Name" placeholder="Nome*" required />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="text" name="Company" placeholder="Empresa" />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="email" name="E-mail" placeholder="Email*" required />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="tel" name="Phone" placeholder="Telefone*" required />
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <textarea name="Message" placeholder="Mensagem*" required></textarea>
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <button className="btn btn-default btn-hover btn-hover-accent" type="submit">
                      <span className="btn-caption">Enviar</span>
                      <i className="ph-bold ph-paper-plane-tilt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="content__block grid-block">
          <div className="socials-cards d-flex justify-content-start flex-wrap">
            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                <i className="ph-bold ph-github-logo"></i>
                <a
                  className="socials-cards__link"
                  href="https://github.com/CristianoVieira1"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </div>
            </div>

            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                <i className="ph-bold ph-linkedin-logo"></i>
                <a
                  className="socials-cards__link"
                  href="https://www.linkedin.com/in/cristianobv/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="content__block">
          <div className="teaser">
            <p className="teaser__text animate-in-up">
              Quer saber mais sobre mim, contar-me sobre o seu projeto. <br />
              <a className="text-link-bold" href="mailto:example@example.com?subject=Message%20from%20your%20site">
                Envie um email e retornarei o mais rápido possível.
              </a>
            </p>
          </div>
        </div>

        <div className="content__block">
          <div className="container-fluid p-0 contact-lines animate-in-up">
            <div className="row g-0 contact-lines__item">
              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">Localização</p>
                <p className="contact-lines__text animate-in-up">
                  <a
                    className="text-link-bold"
                    href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Porto Alegre - RS
                  </a>
                </p>
              </div>

              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">Phone</p>
                <p className="contact-lines__text animate-in-up">
                  <a className="text-link-bold" href="tel:+51998884446">
                    (51) 99888-4446
                  </a>
                </p>
              </div>

              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">Email</p>
                <p className="contact-lines__text animate-in-up">
                  <a
                    className="text-link-bold"
                    href="mailto:cristianovieirati@gmail.com?subject=Message%20from%20portfolio%20site"
                  >
                    cristianovieirati@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
