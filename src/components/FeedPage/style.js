import styled from "styled-components"

import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const PostCard = styled.article`
  display: flex;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.main};

  padding: 12px 15px;

  color: ${({ theme }) => theme.colors.secondary};

  div {
  }

  img {
    max-width: 60px;
    border-radius: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 100%;
    padding: 20px 25px;

    border-radius: ${({ theme }) => theme.borderRadius.post};

    img {
      width: 80px;
    }
  }
`

export const PostCardLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 20%;

  img {
    margin-bottom: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 10%;
    margin-right: 10px;
  }
`

export const PostCardRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 15px;
  padding-left: 0px;

  h3 {
    font-size: 17px;
  }

  h6 {
    color: ${({ theme }) => theme.colors.postMessage};
  }
`

export const LikesContainer = styled.p`
  text-align: center;
  font-size: 12px;

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
