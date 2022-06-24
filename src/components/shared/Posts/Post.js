import React, { useState, useEffect, useRef } from "react"
import * as S from "../../../styles/style.js"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ReactHashtag from "react-hashtag"
import ReactTooltip from "react-tooltip"
import Modal from "react-modal"
import Swal from "sweetalert2"
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
      sharedUrl,
      id,
      userId,
      repostUserId,
      repostsCount,
      repostUsername,
    },
    handleTryLoadAgain,
  } = props
  const navigate = useNavigate()
  const inputRef = useRef()
  const { user } = useAuth()

  const [likedBy, setLikedBy] = useState(() => {
    getLikedBy()
  })

  const [likeTooltip, setLikeTooltip] = useState()
  const [likedByUser, setlikedByUser] = useState(() => {
    getLikedByUser()
  })
  const [editPostActive, setEditPostActive] = useState(false)
  const [activeButton, setActiveButton] = useState(false)
  const [editPostMessage, setEditPostMessage] = useState({ message: "" })

  const [modalIsOpen, setIsOpen] = useState(false)
  const [repostModal, setRepostModal] = useState(false)

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  api.interceptors.request.use(async (config) => {
    const token = user.token
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  useEffect(() => {
    ReactTooltip.rebuild()

    let usersPart = likedBy && likedBy.join(", ")
    let numberPart = likedBy && likesCount - likedBy.length

    let tooltipNewText

    if (likedBy) {
      switch (likesCount) {
        case 0:
          tooltipNewText = "No one has liked it yet"
          break
        case 1:
          tooltipNewText = `Liked by ${likedBy[0]}`
          break
        case 2:
          tooltipNewText = `Liked by ${likedBy[0]} and ${likedBy[1]}`
          break
        case 3:
          if (likedByUser)
            tooltipNewText = `Liked by ${likedBy[0]}, ${likedBy[1]} and ${likedBy[2]}`
          if (!likedByUser)
            tooltipNewText = `Liked by ${usersPart} and ${numberPart} other`
          break
        case 4:
          if (likedByUser)
            tooltipNewText = `Liked by ${usersPart} and ${numberPart} other`
          if (!likedByUser)
            tooltipNewText = `Liked by ${usersPart} and ${numberPart} others`
          break
        default:
          tooltipNewText = `Liked by ${usersPart} and ${numberPart} others`
          break
      }
    }

    setLikeTooltip(tooltipNewText)
  }, [likedBy, likesCount, likedByUser])

  Modal.setAppElement(document.querySelector(".root"))

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openRepostModal() {
    if (!repostUserId) {
      setRepostModal(true)
    }
  }

  function closeRepostModal() {
    setRepostModal(false)
  }

  async function deletePost() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }

    try {
      if (!repostUserId) {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/posts/${id}`,
          config,
        )
      } else {
        await axios.delete(
          `${process.env.REACT_APP_API_URL}/share/${id}`,
          config,
        )
      }
      handleTryLoadAgain()
      closeModal()
    } catch ({ response }) {
      closeModal()
      const { status } = response
      if (
        status === 400 ||
        status === 401 ||
        status === 422 ||
        status === 500
      ) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data,
        })
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error to delete post!",
      })
    }
  }

  function getLikedByUser() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/likes/${id}`, config)
      .then((response) => {
        setlikedByUser(response.data)
      })
  }

  function handleLike() {
    if (!repostUserId) {
      const API_URL = process.env.REACT_APP_API_URL
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }

      if (!likedByUser) {
        props.post.likesCount += 1
        setlikedByUser(true)
        likedBy && setLikedBy(["you", ...likedBy])

        axios
          .post(`${API_URL}/likes/${id}`, null, config)
          .then((response) => {})
          .catch((error) => {
            props.post.likesCount -= 1
            setlikedByUser(false)
            if (likedBy) {
              likedBy.shift()
              setLikedBy([...likedBy])
            }
          })
      } else {
        props.post.likesCount -= 1
        setlikedByUser(false)
        if (likedBy) {
          likedBy.shift()
          setLikedBy([...likedBy])
        }

        axios
          .delete(`${API_URL}/likes/${id}`, config)
          .then((response) => {})
          .catch((error) => {
            props.post.likesCount += 1
            setlikedByUser(true)
            likedBy && setLikedBy(["you", ...likedBy])
          })
      }
    }
  }

  function getLikedBy() {
    const LIMIT = 2

    axios
      .get(`${process.env.REACT_APP_API_URL}/likes?postId=${id}&limit=${LIMIT}`)
      .then((response) => {
        setLikedBy(response.data.likedBy)
      })
  }

  function handleHashtagClick(hashtag) {
    const hashtagWithoutTag = hashtag.split("#")[1]
    navigate(`/hashtag/${hashtagWithoutTag}`)
  }

  function handleClickOnUsername() {
    navigate(`/user/${userId}`)
  }

  async function handleRepost() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/share/${id}`,
        {},
        config,
      )
      handleTryLoadAgain()
      closeRepostModal()
    } catch ({ response }) {
      closeRepostModal()
      const { status } = response
      if (
        status === 400 ||
        status === 401 ||
        status === 422 ||
        status === 500
      ) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data,
        })
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error to repost!",
      })
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

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <S.ModalStyle {...props}>{children}</S.ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <S.OverlayStyle {...props}>{contentElement}</S.OverlayStyle>
        )}
      >
        <span>
          Are you sure you want <br /> to delete this post?
        </span>
        <div>
          <button onClick={closeModal}>No, go back</button>
          <button onClick={deletePost}>Yes, delete it</button>
        </div>
      </Modal>
      <Modal
        isOpen={repostModal}
        onRequestClose={closeRepostModal}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <S.ModalStyle {...props}>{children}</S.ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <S.OverlayStyle {...props}>{contentElement}</S.OverlayStyle>
        )}
      >
        <span>
          Do you want to re-post <br /> this link?
        </span>
        <div>
          <button onClick={closeRepostModal}>No, cancel</button>
          <button onClick={handleRepost}>Yes, share!</button>
        </div>
      </Modal>
      <S.PostCard repostUserId={repostUserId}>
        {repostUserId && (
          <S.RepostCard>
            <div>
              <S.RepostIcon></S.RepostIcon>
              <span>
                Re-posted by
                <strong>
                  {repostUserId === user?.id ? " you" : ` ${repostUsername}`}
                </strong>
              </span>
            </div>
          </S.RepostCard>
        )}
        <S.PostCardLeftColumn>
          <S.CardProfileImage
            src={profileImage}
            alt={username}
            onClick={handleClickOnUsername}
          />
          {likedByUser ? (
            <S.LikeIconFilled onClick={handleLike} />
          ) : (
            <S.LikeIcon onClick={handleLike} />
          )}
          <S.LikesContainer data-tip="" data-for={String(props.post.id)}>
            {likesCount === 1 ? (
              <>{likesCount} like</>
            ) : (
              <>{likesCount} likes</>
            )}
            <ReactTooltip
              id={String(props.post.id)}
              type="light"
              place="bottom"
              getContent={() => {
                return null
              }}
            >
              {likedBy && <span>{likeTooltip}</span>}
            </ReactTooltip>
          </S.LikesContainer>
          <S.RepostContainer>
            <S.RepostIcon onClick={openRepostModal}></S.RepostIcon>
            {repostsCount === 1 ? (
              <span>{repostsCount} repost</span>
            ) : (
              <span>{repostsCount} reposts</span>
            )}
          </S.RepostContainer>
        </S.PostCardLeftColumn>
        <S.PostCardRightColumn>
          <S.ContainerHeaderPost>
            <h3 onClick={handleClickOnUsername}>{username}</h3>
            {!repostUserId
              ? user?.id === userId && (
                  <S.ContainerEditPost>
                    <FaPencilAlt onClick={handleEdit} cursor="pointer" />
                    <FaTrash onClick={openModal} cursor="pointer" />
                  </S.ContainerEditPost>
                )
              : user?.id === repostUserId && (
                  <S.ContainerEditPost>
                    <FaPencilAlt onClick={handleEdit} cursor="pointer" />
                    <FaTrash onClick={openModal} cursor="pointer" />
                  </S.ContainerEditPost>
                )}
          </S.ContainerHeaderPost>
          {editPostActive ? (
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
            <h6>
              <ReactHashtag
                onHashtagClick={(hashtag) => handleHashtagClick(hashtag)}
              >
                {message}
              </ReactHashtag>
            </h6>
          )}
          {previewTitle ? (
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
                  {previewImage && (
                    <img src={previewImage} alt={previewTitle} />
                  )}
                </aside>
              </a>
            </S.LinkPreview>
          ) : (
            <S.LinkPreview>
              <a href={previewUrl} target="_blank" rel="noreferrer">
                <div>
                  <p>{sharedUrl}</p>
                </div>
              </a>
            </S.LinkPreview>
          )}
        </S.PostCardRightColumn>
      </S.PostCard>
    </>
  )
}
