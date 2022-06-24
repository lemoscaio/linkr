import styled from "styled-components"

export const LabelContainer = styled.div`
  display: flex;
`

export const PageLabel = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.displayFont};
  font-size: 28px;
  font-weight: 700;
  word-break: break-all;

  padding: 30px;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 43px;
    padding: 30px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const LabelProfileImage = styled.img`
  position: relative;
  transform: translateY(0%);

  width: 50px;
  height: 50px;
  object-fit: cover;
  flex-grow: 0;
  border-radius: 50%;

  margin-right: 15px;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    transform: translateY(0%);
  }
`
