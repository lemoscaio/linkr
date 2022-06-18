import React, { useState } from "react"
import * as S from "../../../styles/style.js"
import axios from "axios"
import { UserContext } from "../../../contexts/UserContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ReactHashtag from "react-hashtag"

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
      id,
    },
  } = props

  const navigate = useNavigate()

  // TODO Implement like function

  const [likedByUser, setlikedByUser] = useState(false) //State to change the like button color
  const { user } = useContext(UserContext)

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  api.interceptors.request.use(async (config) => {
    const token = user.token
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  async function handleLike() {
    if (!likedByUser) {
      setlikedByUser(true)
      await api.post(`/likes`, { post_id: `${id}` })
    } else {
      setlikedByUser(false)
      const result = await api.delete(`/likes/${id}`)
      console.log(result.data.items)
    }
  }

  function handleHashtagClick(hashtag) {
    const hashtagWithoutTag = hashtag.split("#")[1]

    navigate(`/hashtag/${hashtagWithoutTag}`)
  }

  return (
    <S.PostCard>
      <S.PostCardLeftColumn>
        <S.CardProfileImage src={profileImage} alt={username} />
        {likedByUser ? (
          <S.LikeIconFilled onClick={handleLike} />
        ) : (
          <S.LikeIcon onClick={handleLike} />
        )}
        <S.LikesContainer>{likesCount} likes</S.LikesContainer>
      </S.PostCardLeftColumn>
      <S.PostCardRightColumn>
        <h3>{username}</h3>
        <h6>
          <ReactHashtag
            onHashtagClick={(hashtag) => handleHashtagClick(hashtag)}
          >
            {message}
          </ReactHashtag>
        </h6>
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
