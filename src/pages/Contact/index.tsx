import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://formsubmit.co/cristianovieirati@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Obrigado pelo contato.");
        formRef.current.reset();
      } else {
        toast.error("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <>
      <section id="contact" className="inner contact">
        <div className="content__block section-title">
          <p className="h2__subtitle animate-in-up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <h2 className="h2__title animate-in-up">
            Vamos criar seu app juntos? Fale comigo!
          </h2>
        </div>

        <div className="content__block grid-block block-grid-large">
          <div className="form-container">
            <form
              className="form contact-form"
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="Novo contato pelo portfólio"
              />
              <input type="hidden" name="_captcha" value="false" />
              <div className="container-fluid p-0">
                <div className="row gx-0 p-3">
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="text"
                      name="Nome"
                      placeholder="Seu nome*"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="text"
                      name="Empresa"
                      placeholder="Empresa (opcional)"
                    />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Seu email*"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input
                      type="tel"
                      name="Telefone"
                      placeholder="Seu telefone*"
                      required
                    />
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <textarea
                      name="Mensagem"
                      placeholder="Descreva seu projeto ou dúvida*"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <button
                      className="btn btn-default btn-hover btn-hover-accent"
                      type="submit"
                    >
                      <span className="btn-caption">Enviar mensagem</span>
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
                  aria-label="GitHub"
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
                  aria-label="LinkedIn"
                ></a>
              </div>
            </div>
            <div className="socials-cards__item d-flex grid-item-s animate-card-5">
              <div className="socials-cards__card">
                <i className="ph-bold ph-whatsapp-logo"></i>
                <a
                  className="socials-cards__link"
                  href="https://wa.me/5551998884446"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="content__block">
          <div className="teaser">
            <p className="teaser__text animate-in-up">
              Prefere falar direto? <br />
              <a
                className="text-link-bold"
                href="mailto:cristianovieirati@gmail.com?subject=Contato%20via%20portfólio"
              >
                Envie um e-mail e vamos conversar sobre seu projeto!
              </a>
            </p>
          </div>
        </div>

        <div className="content__block">
          <div className="container-fluid p-0 contact-lines animate-in-up">
            <div className="row g-0 contact-lines__item">
              <div className="col-12 col-md-4 contact-lines__data">
                <p className="contact-lines__title animate-in-up">
                  Localização
                </p>
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
                <p className="contact-lines__title animate-in-up">Telefone</p>
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
                    href="mailto:cristianovieirati@gmail.com?subject=Contato%20via%20portfólio"
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
  );
};

export default Contact;
