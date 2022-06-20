import styled from "styled-components"

import {
  PostCard,
  PostCardLeftColumn,
  CardProfileImage,
  PostCardRightColumn,
} from "../Posts/style.js"

import { Button } from "../../../styles/style.js"

export const PublishCard = styled(PostCard)`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    margin-bottom: 29px;
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text1};

    margin: 10px 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
      font-size: 18px;
    }
  }
`

export const PublishCardLeftColumn = styled(PostCardLeftColumn)`
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    display: none;
  }
`

export const PublishCardProfileImage = styled(CardProfileImage)``

export const PublishCardRightColumn = styled(PostCardRightColumn)`
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    margin-left: 0;
  }
`

export const PublishForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input,
  textarea {
    background-color: ${({ theme }) => theme.colors.inputBackground};

    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-style: normal;
    color: ${({ theme }) => theme.colors.text1};

    padding: 7px 13px;

    border: none;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
      font-size: 14px;
    }

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.mainFont};

      color: ${({ theme }) => theme.colors.text2};

      @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
        font-size: 14px;
      }
    }
  }
`
export const Input = styled.input`
  height: 30px;
`
export const TextArea = styled.textarea`
  resize: vertical;
  height: 66px;
`
export const PublishButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const PublishButton = styled(Button)`
  margin-top: 6px;
  width: 112px;
  height: 22px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  &:disabled,
  &[disabled] {
    background-color: ${({ theme }) => theme.colors.disabledButton};
    cursor: default;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    height: 31px;
  }
`
export const PublishError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.likeButton};

  color: ${({ theme }) => theme.colors.secondary};

  padding: 10px;
  margin-bottom: 10px;

  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}) {
    border-radius: 0;
  }
`
