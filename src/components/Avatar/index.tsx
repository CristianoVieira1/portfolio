import Logo from "../../assets/icons/logo.svg";
import UserImage from "../../assets/images/avatars/avatar2.png";
import * as S from "./styles";

const Avatar = () => {
  return (
    <S.Container>
      <S.Avatar>
        <S.AvatarBlock>
          <S.AvatarLogo>
            <S.LogoImage>
              <img src={Logo} alt="Logo Cristiano Borges" />
            </S.LogoImage>
            <S.LogoCaption>
              <p>Cristiano Borges</p>
            </S.LogoCaption>
          </S.AvatarLogo>

          <S.AvatarImage>
            <img src={UserImage} alt="Foto de Cristiano Borges" />
          </S.AvatarImage>
        </S.AvatarBlock>

        <S.AvatarBlock>
          <h6>
            <small className="top">Especialização</small>
            React Native Developer
          </h6>
        </S.AvatarBlock>

        <S.AvatarBlock>
          <S.AvatarSociais>
            <S.AvatarSquare>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://github.com/CristianoVieira1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Cristiano Borges"
                >
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.linkedin.com/in/cristianobv/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Cristiano Borges"
                >
                  <i className="ph-bold ph-linkedin-logo"></i>
                </a>
              </li>
            </S.AvatarSquare>
          </S.AvatarSociais>
          <div className="avatar__btnholder">
            <a
              className="btn btn-default btn-fullwidth btn-hover btn-hover-accent"
              href="#contact"
            >
              <span className="btn-caption">Vamos criar seu app juntos!</span>
            </a>
          </div>
        </S.AvatarBlock>
      </S.Avatar>
    </S.Container>
  );
};

export default Avatar;
