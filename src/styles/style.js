import styled from "styled-components"

export * from "../components/shared/Buttons/style.js"
export * from "../components/Header/style.js"
export * from "../components/shared/Posts/style.js"
export * from "../components/shared/PublishBox/style.js"
export * from "../components/shared/Labels/style.js"
export * from "../components/shared/Trending/style.js"

export const PageContainer = styled.main`
  /* display: flex; */

  width: 100%;
  margin: 0 auto;
  min-height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};

  transition: all 300ms ease;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    padding: 0 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.largeScreen}) {
    max-width: ${({ theme }) => theme.spacing.maxBodyWidth};
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  gap: 25px;
`

export const MainContentWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`
export const SecondaryContentWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: 301px;

  @media (max-width: ${({ theme }) => theme.breakPoints.largeScreen}) {
    display: none;
  }
`

//AUTH

export const AuthContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
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

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
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

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
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

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
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

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
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

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    h1 {
      font-size: 26px;
    }
  }
`

//MODAL

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`

export const ModalStyle = styled.div`
  width: 41.5vw;
  min-width: 597px;
  height: 262px;
  background-color: #333333;
  border-radius: 50px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 48px;
  line-height: 39px;
  span {
    font-size: 34px;
    color: ${({ theme }) => theme.colors.secondary};
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 27px;
    button {
      width: 9.3vw;
      min-width: 114px;
      height: 37px;
      background: ${({ theme }) => theme.colors.buttonBackground};
      border-radius: 5px;
      font-family: ${({ theme }) => theme.fonts.mainFont};
      font-weight: 700;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.secondary};
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:first-child {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.buttonBackground};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    min-width: 280px;
    height: 150px;
    line-height: 30px;
    gap: 10px;
    span {
      font-size: 22px;
    }
    div {
      gap: 20px;
      button {
        width: 80px;
        min-width: 0px;
        height: 30px;
        font-size: 12px;
      }
    }
  }
`
export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 93%;
    height: 45px;
    background-color: #fff;
    margin-left:10px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    padding-left:16px;
    padding-right:17px;
    
    @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
      display: none;
    }
    .search-bar-input{
      width: 219px;
      height: 20px;
      background: ${({ theme }) => theme.colors.secondary};
      border: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
  
  
      ::placeholder {
          color: ${({ theme }) => theme.colors.search};
          font-family: ${({ theme }) => theme.fonts.mainFont};
          font-style: normal;
          font-weight:400;
          font-size: 17px;
          line-height: 20px;
      }
    }
`

// SEARCH BAR IN DESKTOP
export const SearchBarContainerDesktop = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 45px;
    background-color: #fff;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    padding-left:14px;
    padding-right:17px;
    @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
      display: flex;
    }
    .search-bar-input{
      width: 219px;
      height: 20px;
      background: ${({ theme }) => theme.colors.secondary};
      border: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      outline:none;
  
  
      ::placeholder {
          color: ${({ theme }) => theme.colors.search};
          font-family: ${({ theme }) => theme.fonts.mainFont};
          font-style: normal;
          font-weight:400;
          font-size: 17px;
          line-height: 20px;
      }
    }
`

export const SearchBarResults = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 93%;
  height: auto;
  background-color: #fff;
  margin-left: 10px;
  background: ${({ theme }) => theme.colors.searchResults};
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 17px;
`
export const ContainerDesktop = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const SearchBarResultsDesktop = styled.div`
  position: absolute;
  width: 40%;
  height: auto;
  background-color: #fff;
  background: ${({ theme }) => theme.colors.searchResults};
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 17px;
  cursor: pointer;
`

// SEARCH BAR IN MOBILE
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const SearchBarResultUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const SearchBarResultImage = styled.img`
  width: 39px;
  height: 39px;
  border-radius: 50%;
`

export const SearchBarResultName = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.searchResultName};
  margin-left: 12px;`