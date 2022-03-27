import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #1f1f38;
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: #db4f09;
  }

  .logo {
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
    cursor: default;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;

  }

  @media screen and (max-width: 600px) {
        ul {
          flex-direction: column;
          gap: 1.5rem;
        }
    }
`;

export const Sociais = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

    a {
      background: #db4f09;
      color: #fff;
      padding: 0.7rem;
      display: flex;
      border: 1px solid transparent;
      transition: all 400ms ease;

      &:hover {
        background: transparent;
        color: #db4f09;
        border: 1px solid #db4f09;
      }
    }

    @media screen and (max-width: 600px) {
        margin-bottom: 2.6rem;
    }
`;

export const Copyright = styled.div`
  margin-bottom: 4rem;
  color: #6c757d;
`;
