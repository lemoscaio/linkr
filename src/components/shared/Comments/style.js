import styled from "styled-components"
import { FaRegPaperPlane } from "react-icons/fa"

export const CommentsBox = styled.div`
  position: relative;
  top: -25px;
  border-radius: 16px;
  background-color: #1e1e1e;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    border-radius: 0;
  }
`

export const Comment = styled.div`
  border-bottom: 1px solid #353535;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    padding: 10px 15px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 6px;
    object-fit: cover;

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    }
  }

  h1 {
    color: #f3f3f3;
    max-width: 510px;
    word-break: break-word;
    font-weight: 700;
    font-size: 14px;

    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #acacac;
  }

  div {
    gap: 10px;
    margin-left: 15px;
    padding-left: 0px;
  }

  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #565656;
  }

  span {
    color: #f3f3f3;
    font-weight: bold;
    max-width: 510px;
    word-break: break-word;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
  }
`

export const AddComment = styled.form`
  input {
    width: 100%;
    padding: 0 40px 0 11px;
    height: 39px;
    background-color: #252525;
    border-radius: 8px;
    color: #acacac;
    border: none;

    :focus {
      outline: none;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
      width: 100%;
    }
  }
`

export const IconSend = styled(FaRegPaperPlane)`
  font-size: 18px;
  color: #f3f3f3;

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 25px;
    width: 18px;
    height: 18px;
  }
`

export const ButtonSend = styled.button`
  background-color: Transparent;
  position: absolute;
  border: none;

  right: 25px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    right: 20px;
  }
`
