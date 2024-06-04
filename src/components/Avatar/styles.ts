import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: -moz-calc(100% - 3rem);
  width: calc(100% - 3rem);
  height: auto;
  margin: 0 auto;
  padding-top: 1.5rem;
  padding-bottom: 6rem;
  z-index: 9;
  -webkit-transform-origin: top left;
  -moz-transform-origin: top left;
  -ms-transform-origin: top left;
  transform-origin: top left;
  @media only screen and (min-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 7.5rem;
    width: -moz-calc(100% - 12rem);
    width: calc(100% - 12rem);
  }
  @media only screen and (min-width: 992px) {
    position: fixed;
    top: 3rem;
    left: 3rem;
    width: 300px;
    height: -moz-calc(100% - 6rem);
    height: calc(100% - 6rem);
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  @media only screen and (min-width: 1200px) {
    left: 6rem;
  }
  @media only screen and (min-width: 1400px) {
    top: 5rem;
    left: 8rem;
    width: 400px;
    height: -moz-calc(100% - 10rem);
    height: calc(100% - 10rem);
  }
  @media only screen and (min-width: 1600px) {
    left: 10rem;
  }
`

export const Avatar = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &&::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--base-tint);
    border: 1px solid var(--stroke-elements);
    -moz-border-radius: var(--_radius-xl);
    border-radius: var(--_radius-xl);
  }
  @media only screen and (min-width: 1400px) {
    .avatar__container {
      padding: 5rem;
    }
  }
`

export const AvatarBlock = styled.div`
  position: relative;
  margin-bottom: 3rem;
  &:first-child {
    margin-bottom: 3.6rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 768px) {
    margin-bottom: 4rem;
    &:first-child {
      margin-bottom: 4.4rem;
    }
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
    &:first-child {
      margin-bottom: 0;
    }
  }
`

export const AvatarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  @media only screen and (min-width: 1400px) {
    margin-bottom: 2rem;
  }
`

export const LogoImage = styled.div`
  width: 60px;
  height: 60px;
  svg {
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 1400px) {
    width: 75px;
    height: 75px;
  }
`
export const AvatarImage = styled.div`
  overflow: hidden;
  -moz-border-radius: 3rem;
  border-radius: 3rem;
  margin-bottom: 0.8rem;
`
export const LogoCaption = styled.div`
  padding-left: 2rem;
  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
    line-height: 42px;
    text-align: left;
  }
  @media only screen and (min-width: 1400px) {
    p {
      font-size: 3.6rem;
    }
  }
`
export const AvatarSociais = styled.div`
  margin-bottom: 1rem;
`

export const AvatarSquare = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
