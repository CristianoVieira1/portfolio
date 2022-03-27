import styled from "styled-components";

export const ContainerExp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  > div {
    background: #1f1f38;
    padding: 2.4rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;

    &:hover {
      background: transparent;
      border-color: #db4f09;
      cursor: default;
    }
  }
  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
    font-size: 1.5rem;
  }

  .experience__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }

  .experience__details {
    display: flex;
    gap: 1rem;

    svg {
      margin-top: 6px;
      color: #fff;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;

    > div {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }

    .experience__content {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;

    > div {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`;

export const FrontEnd = styled.div``;

export const BackEnd = styled.div``;
