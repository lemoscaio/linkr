import React, { useState, useRef, useEffect } from "react"
import * as S from "../../../styles/style.js"
import axios from "axios"
import { FaPencilAlt, FaTrash } from "react-icons/fa"
import { useAuth } from "../../../hooks/useAuth.js"

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
      userId,
    },
  } = props

  const [editPostActive, setEditPostActive] = useState(false)
  const [editPostMessage, setEditPostMessage] = useState({ message: "" })
  const [activeButton, setActiveButton] = React.useState(false)

  const inputRef = useRef()

  const [likedByUser, setlikedByUser] = useState(false)
  const { user } = useAuth()
  const onUserId = user.id
  console.log(onUserId)

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

  async function sendUptadePost() {
    setActiveButton(true)
    api
      .put(`/posts/${id}`, { message: editPostMessage.message })
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
        setActiveButton(false)
      })
  }

  function handleKey(e) {
    if (e.key === "Escape") {
      setEditPostActive(!editPostActive)
      return
    }
    if (e.key === "Enter") {
      setEditPostMessage({ message: e.target.value })
      sendUptadePost()
      console.log("cheguei")
      return
    }
  }

  async function handleEdit(e) {
    setEditPostActive(!editPostActive)
  }

  useEffect(() => {
    if (editPostActive) {
      inputRef.current.focus()
    }
  }, [editPostActive])

  return (
    <S.PostCard onClick={() => console.log("🚀 ~ response", userId, onUserId)}>
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
        <S.ContainerHeaderPost>
          <h3>{username}</h3>
          {user.id === userId && (
            <S.ContainerEditPost>
              <FaPencilAlt onClick={handleEdit} cursor="pointer" />
              <FaTrash
                onClick={() => {
                  alert("Delete post")
                }}
                cursor="pointer"
              />
            </S.ContainerEditPost>
          )}
        </S.ContainerHeaderPost>
        {editPostActive === true ? (
          <S.InputEdit
            ref={inputRef}
            onKeyDown={(e) => {
              handleKey(e)
            }}
            disabled={activeButton}
            onChange={(e) =>
              setEditPostMessage({
                ...editPostMessage,
                message: e.target.value,
              })
            }
            value={editPostMessage.message}
          />
        ) : (
          <h6>{message}</h6>
        )}
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
