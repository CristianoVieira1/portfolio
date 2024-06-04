import styled from 'styled-components'

export const CardsItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 520px;
  padding: 20px !important;

  @media only screen and (min-width: 1400px) {
    height: 620px;
  }
`

export const CardsCard = styled.div`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  -moz-border-radius: 3.6rem;
  border-radius: 3.6rem;
  overflow: hidden;
`
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: ${({ theme }) => theme.font.sizes.large};
  line-height: 28px;
  text-align: left;
  margin-top: 2.3rem;
`
