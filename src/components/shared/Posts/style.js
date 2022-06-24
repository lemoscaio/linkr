import styled from "styled-components"

import { AiOutlineComment } from "react-icons/ai"
import { FiHeart, FiSend } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"
import { BiRepost } from "react-icons/bi"

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  margin-bottom: 40px;

  transition: all 300ms ease;
`
export const PostCard = styled.article`
  display: flex;
  gap: 15px;

  position: relative;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.main};

  padding: 18px 15px;

  color: ${({ theme }) => theme.colors.secondary};

  transition: all 300ms;

  margin-top: ${(props) => (props.repostUserId ? "33px" : "0")};

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 100%;

    padding: 20px 25px;
    margin: 0 auto;
    margin-top: ${(props) => (props.repostUserId ? "33px" : "0")};

    box-shadow: 8px 12px 17px 2px rgba(21, 21, 21, 0.47);
    border-radius: ${({ theme }) => theme.borderRadius.post};
  }
`
export const PostCardLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 1;
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

  cursor: pointer;

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
  padding-left: 0px;
  width: 85%;
  height: 100%;
  flex-grow: 5;

  h3 {
    font-size: 17px;

    align-self: flex-start;

    cursor: pointer;
  }

  h6 {
    color: ${({ theme }) => theme.colors.postMessage};

    & > span {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: 700;

      cursor: pointer;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 90%;
  }
`
export const LikesContainer = styled.div`
  text-align: center;
  font-size: 12px;

  cursor: default;
  user-select: none;

  div {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.tooltipText};
    font-weight: 700;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 14px;

    div {
      font-size: 16px;
    }
  }
`
export const LikeIcon = styled(FiHeart)`
  font-size: 25px;

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 28px;
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
export const RepostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  text-align: center;

  span {
    cursor: default;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    span {
      font-size: 14px;
    }
  }
`
export const RepostIconHeader = styled(BiRepost)`
  font-size: 18px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 22px;
  }
`
export const RepostIcon = styled(BiRepost)`
  font-size: 25px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 28px;
  }
`
export const RepostCard = styled.div`
  position: absolute;
  z-index: -1;
  height: 80px;
  top: -33px;
  left: 0;
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.repostBackground};
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 300ms;
  span {
    font-size: 11px;
  }
  div {
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    margin-left: 20px;
  }
  strong {
    font-weight: 700;
    cursor: pointer;
  }
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 100%;
    margin: 0 auto;
    border-radius: ${({ theme }) => theme.borderRadius.post};
    span {
      font-size: 12px;
    }
    div {
      margin-left: 17px;
    }
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
export const CommentIcon = styled(AiOutlineComment)`
  font-size: 25px;

  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 28px;
  }
`
export const CommentsContainer = styled.div`
  text-align: center;
  font-size: 12px;

  cursor: default;
  user-select: none;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 14px;

    div {
      font-size: 16px;
    }
  }
`
export const ContainerEditPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
`
export const ContainerHeaderPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const InputEdit = styled.input`
  position: relative;
  background: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 7px;
  height: 44px;
  border: none;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.text1};
  width: 100%;
  font-size: 16px;
  outline: none;
  transition: all 0.2s;
`
export const SendIcon = styled(FiSend)`
  position: absolute;
  right: 35px;
  top: 58px;
  font-size: 18px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    font-size: 20px;
    right: 43px;
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
