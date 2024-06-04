import styled from 'styled-components'

export const CursorLarge = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid #8f56cc;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  z-index: 9999;
  left: 0;
  top: 0;
  pointer-events: none;
  transition: 0.15s;

  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const CursorSmall = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  background-color: #ff4a17;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  z-index: 9999;
  left: 15px;
  top: 15px;
  pointer-events: none;
  transition: 0.2s;

  @media screen and (max-width: 575px) {
    display: none;
  }
`
