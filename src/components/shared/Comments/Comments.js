import React, { useState, useEffect } from "react"
import axios from "axios"

import { useAuth } from "../../../hooks/useAuth.js"

import * as S from "../../../styles/style.js"

export default function Comments({
  postId,
  commentPoster,
  profileImage,
}) {
  const URL = `${process.env.REACT_APP_API_URL}`

  const { user } = useAuth()

  const [comments, setComments] = useState([])
  const [follows, setFollows] = useState([])
  const [textComment, setTextComment] = useState("")

  function getComments() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments/${postId}`)
      .then((response) => {
        console.log("🚀 ~ response", response)
        setComments([...response.data])
      })
      .catch((error) => {
        console.log("🚀 ~ error", error)
      })
  }

  function getFollows() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comments/follows/${commentPoster}`)
      .then((response) => {
        setFollows([...response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getComments()
    getFollows()
  }, [])

  function addComment(e) {
      e.preventDefault()
      const body = {message: textComment}

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
    }
      axios
      .post(`${process.env.REACT_APP_API_URL}/comments/${postId}`, body, config)
      .then(() => {
          getComments()
          setTextComment("")
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <>
      <S.CommentsBox>
        {comments.map((comment) => (
          <S.Comment>
            <img src={comment.userImage} alt={comment.username} />
            <div>
              <h3>
                <h1>{comment.username}</h1>
                <h2>
                  {commentPoster === comment.userId ? `• post's author` : ""}
                </h2>
                <h2>{follows.includes(comment.userId) ? `• following` : ""}</h2>
              </h3>
              <p>{comment.message}</p>
            </div>
          </S.Comment>
        ))}
        <S.AddComment onSubmit={addComment}>
          <S.Comment>
            <img src={profileImage} alt="user" />
            <input
              type="text"
              placeholder="write a comment..."
              defaultValue={textComment}
              onChange={(e) => setTextComment(e.target.value)}
              required
            />
            <S.ButtonSend type="submit">
                <S.IconSend />
            </S.ButtonSend>
          </S.Comment>
        </S.AddComment>
      </S.CommentsBox>
    </>
  )
}
