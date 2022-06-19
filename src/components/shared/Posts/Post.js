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
      id,
    },
  } = props
  const navigate = useNavigate()

  // TODO get from API
  const [likedBy, setLikedBy] = useState([])

  const [likeTooltip, setLikeTooltip] = useState()

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

  // TODO Implement like function
  // TODO correct function
  async function handleLike() {
    if (!likedByUser) {
      setlikedByUser(true)
      setLikedBy(["you", ...likedBy])
      props.post.likesCount += 1
      await api.post(`/likes`, { post_id: `${id}` })
    } else {
      setlikedByUser(false)
      likedBy.shift()
      setLikedBy([...likedBy])
      props.post.likesCount -= 1
      const result = await api.delete(`/likes/${id}`)
      console.log(result.data.items)
    }
  }

  function handleHashtagClick(hashtag) {
    const hashtagWithoutTag = hashtag.split("#")[1]
    navigate(`/hashtag/${hashtagWithoutTag}`)
  }

  // TODO return only 2 people on array of likedBy
  useEffect(() => {
    ReactTooltip.rebuild()

    let usersPart = likedBy.join(", ")
    let numberPart = likesCount - likedBy.length

    let tooltipNewText

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

    setLikeTooltip(tooltipNewText)
  }, [likedBy, likesCount, likedByUser])

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
          <ReactTooltip id={String(props.post.id)} type="light" place="bottom">
            <span>{likeTooltip}</span>
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
