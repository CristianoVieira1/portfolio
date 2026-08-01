import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

const WHATSAPP_URL =
  "https://wa.me/5551998884446?text=Ol%C3%A1%20Cristiano%2C%20quero%20falar%20sobre%20um%20projeto";

export default function Contact({
  parentClass = "get-in-touch-area tmp-section-gapTop",
}) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lang } = useLanguage();
  const t = translations.contact;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(form.current!);
    const email = formData.get("email") as string;

    if (!validateEmail(email)) {
      toast.error(t.errorEmail[lang]);
      return;
    }

    if (!isConfigured || !form.current) {
      toast.error(t.errorConfig[lang]);
      return;
    }

    try {
      setIsSubmitting(true);
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey,
        },
      );

      if (result.status === 200) {
        toast.success(t.success[lang]);
        form.current?.reset();
      } else {
        toast.error(t.errorSend[lang]);
      }
    } catch (error) {
      console.error(error);
      toast.error(t.errorGeneric[lang]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={parentClass} id="contacts">
      <div className="container">
        <div className="get-in-touch-wrapper tmponhover">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">{/* Left Info */}</div>

            <div className="col-lg-7">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title">{t.title[lang]}</span>
                </div>
                <div className="contact-form">
                  <form
                    className="tmp-dynamic-form"
                    id="contact-form"
                    ref={form}
                    onSubmit={sendMail}
                  >
                    <div className="contact-form-wrapper row">
                      <div className="col-lg-6">
                        <label className="visually-hidden" htmlFor="contact-name">
                          {t.name[lang]}
                        </label>
                        <input
                          id="contact-name"
                          className="input-field"
                          name="name"
                          placeholder={t.name[lang]}
                          type="text"
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="visually-hidden" htmlFor="contact-phone">
                          {t.phone[lang]}
                        </label>
                        <input
                          id="contact-phone"
                          className="input-field"
                          name="phone"
                          placeholder={t.phone[lang]}
                          type="tel"
                          autoComplete="tel"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="visually-hidden" htmlFor="contact-email">
                          {t.email[lang]}
                        </label>
                        <input
                          id="contact-email"
                          className="input-field"
                          name="email"
                          placeholder={t.email[lang]}
                          type="email"
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <label
                          className="visually-hidden"
                          htmlFor="contact-subject"
                        >
                          {t.subject[lang]}
                        </label>
                        <input
                          id="contact-subject"
                          className="input-field"
                          name="subject"
                          placeholder={t.subject[lang]}
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <label
                          className="visually-hidden"
                          htmlFor="contact-message"
                        >
                          {t.message[lang]}
                        </label>
                        <textarea
                          id="contact-message"
                          className="input-field"
                          placeholder={t.message[lang]}
                          name="message"
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="tmp-button-here">
                          <button
                            className="tmp-btn hover-icon-reverse radius-round w-100"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                {isSubmitting
                                  ? t.sending[lang]
                                  : t.submit[lang]}
                              </span>
                              <span className="btn-icon">
                                <i
                                  className="fa-sharp fa-regular fa-arrow-right"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="btn-icon">
                                <i
                                  className="fa-sharp fa-regular fa-arrow-right"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                          </button>
                        </div>
                        <p className="contact-whatsapp-alt">
                          {t.whatsappAlt[lang]}{" "}
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.whatsappCta[lang]}
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
