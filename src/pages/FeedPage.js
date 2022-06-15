import React, { useState } from "react"
import axios from "axios"

import PageLabel from "../components/shared/Labels/PageLabel.js"
import * as S from "../styles/style.js"

export default function FeedPage() {
  const [posts, setPosts] = useState(() => {
    const LIMIT = 2
    const ORDERBY = "created_at"
    const ORDER_DIR = "desc"
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/posts?limit=${LIMIT}&order=${ORDERBY}&direction=${ORDER_DIR}`,
      )
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error))
  })

  console.log(posts)

  return (
    <S.PageContainer>
      <PageLabel>timeline</PageLabel>
      <Posts>
        {posts &&
          posts.map((post) => {
            return <Post post={post} />
          })}
      </Posts>
    </S.PageContainer>
  )
}

function Posts(props) {
  return <S.PostsContainer>{props.children}</S.PostsContainer>
}

function Post(props) {
  const {
    post: {
      username,
      profileImage,
      message,
      likesCount,
      previewImage,
      previewTitle,
      previewDescription,
      previewUrl,
    },
  } = props
  const likedByUser = false

  return (
    <S.PostCard>
      <S.PostCardLeftColumn>
        <img src={profileImage} alt={username} />
        {likedByUser ? <S.LikeIcon /> : <S.LikeIconFilled />}
        <S.LikesContainer>{likesCount} Likes</S.LikesContainer>
      </S.PostCardLeftColumn>
      <S.PostCardRightColumn>
        <h3>{username}</h3>
        <h6>{message} #hashtag</h6>
        <div>
          <div>
            <p>{previewTitle}</p>
            <p>{previewDescription}</p>
            <p>{previewUrl}</p>
          </div>
          <img src={previewImage} alt={previewTitle} />
        </div>
      </S.PostCardRightColumn>
    </S.PostCard>
  )
}
