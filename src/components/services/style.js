import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  .service {
    background: #1f1f38;
    border-radius: 0 0 2rem 2rem;
    border: 1px solid rgba(255,255,255,0.);
    height: fit-content;
    transition: all 400ms ease;

    &:hover {
      background: transparent;
      border: 1px solid #db4f09;
      cursor: default;
    }
  }

  .service__head {
    background: #db4f09;
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

    h3 {
      color: #fff;
      font-size: 1rem;
      text-align: center;
    }
  }

  .service__list {
    padding: 1.5rem;

    li {
      display: flex;
      gap: 1rem;
      margin-bottom: 0.8rem;

      svg {
        color: #19d4ca;
        margin-top: 2px;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 1230px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      article {
        height: auto;
      }
  }

  @media screen and (max-width: 670px) {
    grid-template-columns: 1fr;
      gap: 1.5rem;
    }
`;
