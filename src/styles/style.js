import styled from "styled-components"

export const PageContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: ${({ theme }) => theme.spacing.maxBodyWidth};
    margin: 0 auto;
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
  }
`

export const Header = styled.header`
  height: ${({ theme }) => theme.spacing.headerHeight};

  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.secondary};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;

  user-select: none;

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
`
