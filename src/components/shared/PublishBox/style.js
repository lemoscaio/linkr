import styled from "styled-components"

import { PostCard } from "../Posts/style.js"

export const PublishCard = styled(PostCard)`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 16px;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    margin-bottom: 29px;
  }
  h2 {
    display: flex;
    padding-top: 10px;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text1};
  }
  .input-box {
    display: flex;
    flex-direction: column;

    .input-url {
      height: 30px;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.colors.inputBackground};

      ::placeholder {
        font-family: ${({ theme }) => theme.fonts.mainFont};
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        padding-left: 11px;
        color: ${({ theme }) => theme.colors.text2};

        @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
          font-size: 15px;
          line-height: 18px;
        }
      }
    }

    .input-message {
      margin-top: 5px;
      height: 47px;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.colors.inputBackground};

      ::placeholder {
        font-family: ${({ theme }) => theme.fonts.mainFont};
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        padding-left: 11px;
        color: ${({ theme }) => theme.colors.text2};
      }
    }
    .containerButton {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .button-publish {
      margin-top: 6px;
      width: 112px;
      height: 22px;
      border: none;
      font-family: ${({ theme }) => theme.fonts.mainFont};
      font-size: 13px;
      line-height: 16px;
      text-align: center;

      @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
        height: 31px;
      }
    }
  }
`
