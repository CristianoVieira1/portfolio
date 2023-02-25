import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  article {
    background: #1f1f38;
    padding: 1.2rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;

    &:hover {
      border-color: #1f1f38;
      background: transparent;
    }

    > div {
      border-radius: 1.5rem;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    h3 {
      margin: 1.2rem;
      padding-left: 2rem;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
`;
