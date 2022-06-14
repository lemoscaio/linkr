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

// HEADER

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

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;

  h1 {
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: 49px;
    letter-spacing: 0.05em;
    padding-left: 20px;
  }

  nav {
    height: 100%;

    position: relative;

    padding-right: 20px;

    ul {
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      list-style: none;

      li {
        height: 100%;

        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        transition: filter 300ms;
        &:hover {
          /* filter: brightness(1.2); */
        }

        svg {
          font-size: 22px;
          cursor: pointer;
        }

        img {
          height: 70%;
          margin: 0;
          border-radius: 50%;
        }
      }
    }
  }
`
export const DropdownMenu = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.headerHeight};
  right: 0;

  width: 150px;

  border-radius: 0 0 0 20px;

  background-color: ${({ theme }) => theme.colors.main};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 700;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 90%;
    padding: 10px;
    margin: 5px;

    border-radius: 5px 5px 5px 5px;

    &:last-of-type {
      border-radius: 5px 5px 5px 15px;
    }

    cursor: pointer;

    transition: filter 300ms;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
      filter: brightness(1.5);
    }
  }
`
