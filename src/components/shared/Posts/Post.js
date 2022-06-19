import React, { useState, useEffect } from "react"
import * as S from "../../../styles/style.js"
import axios from "axios"
import { UserContext } from "../../../contexts/UserContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ReactHashtag from "react-hashtag"
import ReactTooltip from "react-tooltip"

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
    },
  } = props
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const [likedBy, setLikedBy] = useState(() => {
    getLikedBy()
  })
  const [likeTooltip, setLikeTooltip] = useState()
  const [likedByUser, setlikedByUser] = useState(false)

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

  // TODO Implement like function
  // TODO correct function
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
      likedBy && setLikedBy(["you", ...likedBy])
      props.post.likesCount += 1
      await api.post(`/likes`, { post_id: `${id}` })
    } else {
      setlikedByUser(false)
      if (likedBy) {
        likedBy.shift()
        setLikedBy([...likedBy])
      }
      props.post.likesCount -= 1
      const result = await api.delete(`/likes/${id}`)
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

  return (
    <S.PostCard>
      <S.PostCardLeftColumn>
        <S.CardProfileImage src={profileImage} alt={username} />
        {likedByUser ? (
          <S.LikeIconFilled onClick={handleLike} />
        ) : (
          <S.LikeIcon onClick={handleLike} />
        )}
        <S.LikesContainer data-tip="" data-for={String(props.post.id)}>
          {likesCount === 1 ? <>{likesCount} like</> : <>{likesCount} likes</>}
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
                {previewImage && <img src={previewImage} alt={previewTitle} />}
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
  )
}
