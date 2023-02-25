import styled from "styled-components";

export const HeaderBg = styled.header`
  height: 100vh;
  padding-top: 2rem;
  overflow: hidden;

  .header__container {
    text-align: center;
    height: 100%;
    position: relative;
  }

  @media screen and (max-width: 1024px) {
    height: 100vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

/*================CTA=================*/

export const CTA_HEA = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

/*================HEADER SOCIAIS=================*/

export const Sociais = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: #db4f09;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

/*================ME=================*/

export const MeImg = styled.div`
  background: linear-gradient(#4db5ff, transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 3rem 0.3rem 1.5rem 0.3rem;
`;

export const Image = styled.img`
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  top: -0rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
`;

/*================ME=================*/

export const Scroll = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 4.5rem;
  font-size: 3.2rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
