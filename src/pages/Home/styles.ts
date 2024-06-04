import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
`

export const Content = styled.div`
  margin-top: 10rem;
  padding: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan('medium')`
  justify-content: center;
  flex-direction: column;
  padding: 6rem;
  align-items: center;
  margin-top: -3rem;
  
`}
`

export const Row = styled.div`
  max-width: 70rem;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
  max-width: 100%;
  justify-content: center;
  align-items: center;
  
`}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    line-height: 22px;
    margin-bottom: ${theme.spacings.small};

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
`}
  `}
`

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.opacityBlack};
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 45px;
    margin-bottom: ${theme.spacings.small};

    span {
      color: ${theme.colors.orange};
    }

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.small};
    line-height: 25px;
    text-align: center;
`}
  `}
`

export const CardImg = styled.img`
  ${({ theme }) => css`
    width: 60%;
    height: auto;
    box-shadow: 16px 14px 20px ${theme.colors.opacityBlack};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      background-image: conic-gradient(#6eccc3 20deg, transparent 120deg);
      width: 100%;
      height: 100%;
      position: absolute;
      animation: rotate 2s linear infinite;
    }

    &::after {
      content: '';
      width: 190px;
      height: 190px;
      position: absolute;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: large;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
