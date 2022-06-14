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

export const AuthContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const AuthLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 62.8%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.secondary};
  h1 {
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-weight: 700;
    font-size: 106px;
    letter-spacing: 0.05em;
  }
  span {
    font-family: ${({ theme }) => theme.fonts.displayFont};
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
  }
`

export const BoxAuthLogo = styled.div`
  gap: 12px;
`

export const AuthForm = styled.form`
  width: 37.2%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: underline;
    font-size: 20px;
    color: #ffffff;
    line-height: 24px;
    margin-top: 13px;
  }
`

export const InputBox = styled.div`
  input {
    width: 100vw;
    max-width: 30vw;
    height: 65px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 6px;
    font-family: ${({ theme }) => theme.fonts.displayFont};
    font-weight: 700;
    font-size: 27px;
    color: ${({ theme }) => theme.colors.main};
    margin-top: 13px;
    padding-left: 17px;
    border: none;
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    color: red;
    font-weight: 400;
    font-size: 13px;
    padding: 5px;
    width: 30vw;
    display: none;
  }
  input:invalid[focused="true"] {
    border: 1px solid red;
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }
`
export const Button = styled.button`
  width: 100vw;
  max-width: 30vw;
  height: 65px;
  background: ${({ theme }) => theme.colors.buttonBackground};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.displayFont};
  font-weight: 700;
  font-size: 27px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 13px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
