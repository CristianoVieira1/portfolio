import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    article {
      background: #1f1f38;
      padding: 1.2rem;
      border-radius: 1.2rem;
      text-align: center;
      border: 1px solid transparent;
      transition: all 400ms ease;

      &:hover {
        background: transparent;
        border-color: #db4f09;
      }

      svg {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      a {
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.9rem;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input, textarea {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid #1f1f38;
      resize: none;
      color: #fff
    }
  }

  @media screen and (max-width: 1256px) {
      grid-template-columns: 1fr;
      gap: 2rem;
  }

  @media screen and (max-width: 600px) {
      width: 90%;
    }
`;
