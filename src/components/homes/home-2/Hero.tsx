import AnimatedHeroBackground from "./AnimatedHeroBackground";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations.hero;
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (shouldReduceMotion) return;

    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;
      const rect = hero.getBoundingClientRect();
      const distanceFromTop = Math.max(0, -rect.top);
      const maxRange = Math.max(rect.height, window.innerHeight);
      const clamped = Math.min(distanceFromTop, maxRange);

      const contentOffset = Math.min(clamped * 0.24, 140);
      const bgOffset = Math.min(clamped * 0.12, 80);

      hero.style.setProperty("--hero-parallax-content", `${contentOffset}px`);
      hero.style.setProperty("--hero-parallax-bg", `${bgOffset}px`);
    };

    const queueUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    updateParallax();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="rpp-banner-two-area neon-animated-hero neon-hero-parallax"
      id="home"
    >
      <AnimatedHeroBackground />
      <div className="container hero-content-layer">
        <div className="banner-two-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <div className="main-img">
                  <img
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="banner-img"
                    src="/portfolio/assets/images/banner/banner-user-image-two.png"
                    width={444}
                    height={711}
                  />
                  <h2 className="banner-big-text-1 up-down-2">React Native</h2>
                  <h2 className="banner-big-text-2 up-down">React Native</h2>
                  <div className="benner-two-bg-red-img">
                    <img
                      alt="red-img"
                      src="/portfolio/assets/images/banner/banner-user-image-two-red-bg.png"
                      width={630}
                      height={285}
                    />
                  </div>
                  <div className="logo-under-img-wrap">
                    <div className="logo-under-img">
                      <img
                        alt="logo-under-image"
                        src="/portfolio/assets/images/banner/logo-under-image.png"
                        width={198}
                        height={198}
                      />
                    </div>
                    <div className="logo-under-img-2">
                      <img
                        alt="logo-under-image"
                        src="/portfolio/assets/images/banner/logo-under-image-2.png"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt--100">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  {t.greeting[lang]}
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  {t.title[lang]} <br />
                  {t.titleHighlight[lang]}
                </h1>
                <p
                  className="disc tmp-scroll-trigger tmp-title-split tmp-fade-in animation-order-3"
                  dangerouslySetInnerHTML={{ __html: t.description[lang] }}
                />
                <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse radius-round"
                    href="#about"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">{t.aboutBtn[lang]}</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>
                <div className="find-me-on tmp-scroll-trigger tmp-fade-in animation-order-5">
                  <h2 className="find-me-on-title">{t.findMe[lang]}</h2>
                  <div className="social-link banner">
                    <a
                      href="https://www.linkedin.com/in/cristianobv"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a
                      href="https://github.com/CristianoVieira1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                    <a
                      href="https://wa.me/5551998884446"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a href="mailto:cristianovieirati@gmail.com">
                      <i className="fa-light fa-envelope" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
