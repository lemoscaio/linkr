import styled from "styled-components"

import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 40px;
`
export const PostCard = styled.article`
  display: flex;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.main};

  padding: 18px 15px;

  color: ${({ theme }) => theme.colors.secondary};

  transition: all 300ms;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 100%;

    padding: 20px 25px;
    margin: 0 auto;

    box-shadow: 8px 12px 17px 2px rgba(21, 21, 21, 0.47);
    border-radius: ${({ theme }) => theme.borderRadius.post};
  }
`
export const PostCardLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;

  width: 15%;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 10%;
    margin-right: 10px;
  }
`
export const CardProfileImage = styled.img`
  aspect-ratio: 1;
  width: 50px;
  height: 50px;
  object-fit: cover;

  border-radius: 50%;

  margin-bottom: 10px;

  transition: all 300ms ease;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 70px;
    height: 70px;
    padding: 0;
  }
`
export const PostCardRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 15px;
  padding-left: 0px;
  width: 85%;
  height: 100%;
  flex-grow: 1;

  h3 {
    font-size: 17px;
  }

  h6 {
    color: ${({ theme }) => theme.colors.postMessage};
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 90%;
  }
`
export const LikesContainer = styled.p`
  text-align: center;
  font-size: 12px;
  flex-grow: 1;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 14px;
  }
`
export const LikeIcon = styled(FiHeart)`
  font-size: 25px;

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 32px;
  }
`
export const LikeIconFilled = styled(FaHeart)`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.likeButton};

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 32px;
  }
`
export const LinkPreview = styled.article`
  a {
    display: flex;

    height: 100%;

    border: 1px solid ${({ theme }) => theme.colors.linkPreviewBorder};
    border-radius: 15px;

    overflow: hidden;

    margin-top: 20px;

    cursor: pointer;
    user-select: none;

    transition: all 300ms ease;

    word-break: break-all;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      gap: 10px;

      width: 100%;
      height: 100%;

      color: ${({ theme }) => theme.colors.linkPreviewTitle};

      padding: 20px 18px;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;

        height: 100%;

        h4 {
          font-size: 16px;
        }
        h6 {
          font-size: 11px;
          color: ${({ theme }) => theme.colors.linkPreviewDescription};
        }
      }

      p {
        font-size: 11px;
      }
    }

    img {
      object-fit: cover;

      width: 95px;
      height: 100%;

      border-left: 1px solid ${({ theme }) => theme.colors.linkPreviewBorder};

      @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
        width: 150px;
        height: 100%;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        display: none;
      }
    }
  }
`

// BEHAVIORS
export const LoadingPosts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  filter: drop-shadow(4px 4px 2px rgba(21, 21, 21, 0.27));

  & svg {
    position: relative;
    transform: translate(36px, -36px);
  }
`
export const ErrorLoadMessage = styled(PostCard)`
  justify-content: center;
  align-self: center;

  width: 70%;

  padding: 30px;
  margin-top: 40px;

  background-color: ${({ theme }) => theme.colors.secondary};

  color: ${({ theme }) => theme.colors.text1};

  border-radius: ${({ theme }) => theme.borderRadius.post};

  p {
    text-align: center;
    line-height: 20px;
  }

  span {
    color: ${({ theme }) => theme.colors.likeButton};
    text-decoration: underline;
    font-weight: 700;
    text-transform: uppercase;

    cursor: pointer;
  }
`
export const NoPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 60px;

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`
//PUBLICATION

export const PublishBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 164px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 611px;
    height: 209px;
    border-radius: ${({ theme }) => theme.borderRadius.post};
    margin-bottom: 29px;
  }

  img {
    position: relative;
    display: none;
    @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
      display: block;
      position: absolute;
      top: 16px;
      left: 18px;
      width: 50px;
      height: 50px;
      border-radius: 26.5px;
      background: red;
    }
  }

  h2 {
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 10px;
    width: 307px;
    height: 40px;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text1};

    @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
      width: 445px;
      height: 40px;
      font-size: 20px;
      line-height: 24px;
      justify-content: flex-start;
      align-items: start;
    }
  }

  .input-box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
      padding-left: 60px;
    }

    .input-url {
      width: 345px;
      height: 30px;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.colors.inputBackground};

      @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
        width: 503px;
        height: 30px;
        border-radius: 5px;
      }

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
      width: 344px;
      height: 47px;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.colors.inputBackground};

      @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
        width: 502px;
        height: 66px;
        border-radius: 5px;
      }

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

    .button-publish {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 6px;
      width: 112px;
      height: 22px;
      border-radius: 5px;
      border: none;
      background: ${({ theme }) => theme.colors.buttonBackground};
      color: ${({ theme }) => theme.colors.secondary};
      font-family: ${({ theme }) => theme.fonts.mainFont};
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      margin-left: 233px;
      cursor: pointer;

      @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
        width: 112px;
        height: 31px;
        border-radius: 5px;
        margin-left: 390px;
      }
    }
  }
`
