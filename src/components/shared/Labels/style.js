import styled from "styled-components"

export const PageLabel = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.displayFont};
  font-size: 43px;
  font-weight: 700;

  padding: 30px;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    padding: 30px 0;
  }
`
