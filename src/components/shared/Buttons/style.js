import styled from "styled-components"

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

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    max-width: 88vw;
    height: 55px;
    font-size: 22px;
    margin-top: 12px;
  }
`

export const LoadPostsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  cursor: pointer;
`
export const Button2 = styled.button`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: 400;
  font-size: 16px;
  margin-top: 0;
  padding: 10px;
  width: 80%;

  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    margin-left: 10px;
    font-size: 24px;
    transform: translateY(5%);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 100%;
  }
`
