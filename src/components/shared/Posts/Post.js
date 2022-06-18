import React from "react"
import * as S from "../../../styles/style.js"

export default function Post(props) {
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

  // TODO Implement like function
  const likedByUser = false

  return (
    <S.PostCard>
      <S.PostCardLeftColumn>
        <S.CardProfileImage src={profileImage} alt={username} />
        {likedByUser ? <S.LikeIconFilled /> : <S.LikeIcon />}
        <S.LikesContainer>{likesCount} likes</S.LikesContainer>
      </S.PostCardLeftColumn>
      <S.PostCardRightColumn>
        <h3>{username}</h3>
        <h6>{message}</h6>
        <S.LinkPreview>
          <a href={previewUrl} target="_blank" rel="noreferrer">
            <div>
              <div>
                <h4>{previewTitle}</h4>
                <h6>{previewDescription}</h6>
              </div>
              <p>{previewUrl}</p>
            </div>
            <aside>
              {previewImage && <img src={previewImage} alt={previewTitle} />}
            </aside>
          </a>
        </S.LinkPreview>
      </S.PostCardRightColumn>
    </S.PostCard>
  )
}
