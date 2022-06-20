import React, { useState, useContext } from "react"
import axios from "axios"

import profilePic from "../../../assets/profile-placeholder.jpg"

import * as S from "./../../../styles/style.js"
import { UserContext } from "../../../contexts/UserContext.js"

export default function PublishBox(props) {
  const posts = props?.posts
  const setPosts = props?.setPosts
  const [newPost, setNewPost] = useState({
    sharedUrl: "",
    message: "",
  })
  const [loadingPublish, setLoadingPublish] = useState("Publish")
  const [activePublishButton, setActivePublishButton] = useState(true)
  const [errorContainer, setErrorContainer] = useState()

  const { user } = useContext(UserContext)
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }

  function publishUrl(e) {
    e.preventDefault()

    setErrorContainer()
    setActivePublishButton(false)
    setLoadingPublish("Publishing...")

    if (!newPost.sharedUrl) {
      setLoadingPublish("Publish")
      setActivePublishButton(true)
      return setErrorContainer("You must fill at least the URL input")
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/posts`, newPost, config)
      .then((response) => {
        setActivePublishButton(true)
        setLoadingPublish("Publish")
        setPosts([
          {
            ...response.data,
            username: user.username,
            profileImage: user.profileImage,
            likesCount: 0,
          },
          ...posts,
        ])
        setNewPost({ sharedUrl: "", message: "" })
      })
      .catch((error) => {
        setLoadingPublish("Publish")
        setErrorContainer("Something went wrong. Please, try again.")
        setActivePublishButton(true)
      })
  }

  return (
    <>
      {errorContainer && <S.PublishError>{errorContainer}</S.PublishError>}
      <S.PublishCard>
        <S.PublishCardLeftColumn>
          <S.PublishCardProfileImage
            src={user.profileImage ? user.profileImage : profilePic}
            alt={user.username}
          />
        </S.PublishCardLeftColumn>
        <S.PublishCardRightColumn>
          <h2>What are you going to share today?</h2>
          <S.PublishForm onSubmit={publishUrl}>
            <S.Input
              type="text"
              disabled={!activePublishButton}
              placeholder="http://..."
              value={newPost.sharedUrl}
              onChange={(e) =>
                setNewPost({
                  ...newPost,
                  sharedUrl: e.target.value,
                })
              }
            />
            <S.TextArea
              type="text"
              disabled={!activePublishButton}
              placeholder="What's on your mind? (Optional)"
              value={newPost.message}
              onChange={(e) =>
                setNewPost({ ...newPost, message: e.target.value })
              }
            />
            <S.PublishButtonContainer>
              <S.PublishButton type="submit" disabled={!activePublishButton}>
                {loadingPublish}
              </S.PublishButton>
            </S.PublishButtonContainer>
          </S.PublishForm>
        </S.PublishCardRightColumn>
      </S.PublishCard>
    </>
  )
}
