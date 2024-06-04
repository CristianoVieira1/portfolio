const Header = () => (
  <header id="header" className="header d-flex justify-content-between">
    <div className="header__navigation">
      <nav id="menu" className="menu">
        <ul className="menu__list d-flex justify-content-start">
          <li className="menu__item">
            <a className="menu__link btn" href="#home">
              <span className="menu__caption">Home</span>
              <i className="ph-bold ph-house-simple"></i>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link btn" href="#portfolio">
              <span className="menu__caption">Portfolio</span>
              <i className="ph-bold ph-squares-four"></i>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link btn" href="#about">
              <span className="menu__caption">Sobre mim</span>
              <i className="ph-bold ph-user"></i>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link btn" href="#resume">
              <span className="menu__caption">Resume</span>
              <i className="ph-bold ph-article"></i>
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link btn" href="#contact">
              <span className="menu__caption">Contato</span>
              <i className="ph-bold ph-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="header__controls d-flex justify-content-end">
      <button
        id="color-switcher"
        className="color-switcher header__switcher btn"
        type="button"
        role="switch"
        aria-label="light/dark mode"
        aria-checked="true"
      ></button>
      <a
        id="notify-trigger"
        className="header__trigger btn"
        href="mailto:cristianovieirati@gmail.com?subject=Message%20from%20your%20site"
      >
        <span className="trigger__caption">Vamos conversar</span>
        <i className="ph-bold ph-chat-dots"></i>
      </a>
    </div>
  </header>
)
export default Header
