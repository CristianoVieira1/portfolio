import styled from "styled-components";

export const NavBar = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  padding: 0.7rem 1.7rem;
  z-index: 99999999;
  left: 50%;
  transform: translate(-50%);
  position: fixed;
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
  cursor: pointer;

  a {
    color: rgba(255, 255, 255, 0.6);
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;

    &:hover {
      color: #db4f09;
      background: rgba(0, 0, 0, 0.3);
    }
  }

  .active {
    background: rgba(0, 0, 0, 0.3);
    color: #db4f09;
  }
`;
