import styled from "styled-components"

export * from "../components/Header/style.js"

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

//AUTH

export const AuthContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
  }
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

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100vw;
    height: 26.3vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    h1 {
      font-size: 76px;
    }
    span {
      font-size: 23px;
      line-height: 34px;
    }
  }
`

export const BoxAuthLogo = styled.div`
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    gap: 0;
  }
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

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100vw;
    height: 100%;
    justify-content: flex-start;
    margin-top: 4.5vh;
    a {
      font-size: 17px;
      line-height: 20px;
      margin-top: 18px;
    }
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
    color: ${({ theme }) => theme.colors.error};
    font-weight: 400;
    font-size: 13px;
    padding: 5px;
    width: 30vw;
    display: none;
  }
  input:invalid[focused="true"] {
    border: 1px solid ${({ theme }) => theme.colors.error};
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    input {
      max-width: 88vw;
      height: 55px;
      font-size: 22px;
      margin-top: 12px;
    }
    span {
      font-size: 11px;
      width: 88vw;
    }
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

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    max-width: 88vw;
    height: 55px;
    font-size: 22px;
    margin-top: 12px;
  }
`
export const TrendingBox = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: #171717;
  border-radius: 16px;
  width: 301px;
  height: auto;
  font-weight: 700;
`

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    h1 {
      font-size: 26px;
    }
  }
`
