import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  .about__me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, #db4f09, transparent);
    display: grid;
    place-items: center;
  }

  .about__me-image {
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: all 400ms ease;

    &:hover {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 1360px) {
    grid-template-columns: 1fr;
    gap: 0;

    .about__me  {
      width: 50%;
      margin: 2rem auto 4rem
    }
  }

  @media screen and (max-width: 600px) {
    .about__me  {
      width: 65%;
      margin: 0 auto 3rem;
    }
  }
`;

export const AboutContent = styled.div`
  .about__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .about__card {
    background: #17a2b8;
    border: 1px solid transparent;
    border-radius: 1rem;
    /* padding: 2rem; */
    text-align: center;
    transition: all 400ms ease;

    &:hover {
      background: transparent;
      border-color: #17a2b8;
      cursor: default;

      h5 {
        color: #fff;
      }
    }
  }

  svg {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  h5 {
    color: #343a40;
    font-size: 1rem;
    font-weight: 700;
    transition: all 400ms ease;
  }

  small {
    font-size: 0.8rem;
    font-weight: 400;
  }

  p {
    margin: 2rem 0 2.6rem;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1024px) {
    p{
      margin: 1rem 0 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    padding: 0.5rem;

    .about__cards  {
      grid-template-columns: 1fr 1fr;
      gap: 1rem
    }

    h5 {
      font-size: 0.8rem;
    }

    p {
      margin: 1.5rem 0;
    }
  }
`;
