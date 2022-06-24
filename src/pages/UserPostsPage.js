import React, { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { LineWave } from "react-loader-spinner"
import { useTheme } from "styled-components"

import PageLabel from "../components/shared/Labels/PageLabel.js"
import Posts from "../components/shared/Posts/Posts.js"
import Post from "../components/shared/Posts/Post"
import Trending from "../components/shared/Trending/Trending.js"

import * as S from "../styles/style.js"
import { useAuth } from "../hooks/useAuth.js"
import Swal from "sweetalert2"

export default function UserPostsPage() {
  const { user } = useAuth()
  const { userId } = useParams()

  const [userInfo, setUserInfo] = useState(() => {
    getUserInfo()
  })
  const [loadUserInfoFail, setLoadUserInfoFail] = useState(false)

  const [posts, setPosts] = useState(() => {
    getUserPosts()
  })
  const [loadedPosts, setLoadedPosts] = useState(false)
  const [loadPostsFail, setLoadPostsFail] = useState(false)
  const [buttonFollow, setButtonFollow] = useState(() => {
    getButtonFollow()
  })
  const [buttonActive, setButtonActive] = useState(false)
  const [refreshPage, setRefreshPage] = useState(false)

  const theme = useTheme()

  function getUserInfo() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
      .then((response) => {
        setUserInfo({ ...response.data })
      })
      .catch((error) => {
        setLoadUserInfoFail(true)
      })
  }

  function getUserPosts() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${userId}`, config)
      .then((response) => {
        setPosts([...response.data])
        setLoadedPosts(true)
      })
      .catch((error) => {
        setLoadedPosts(true)
        setLoadPostsFail(true)
      })
  }

  function handleTryLoadAgain() {
    setLoadedPosts(false)
    setLoadPostsFail(false)
    setLoadUserInfoFail(false)
    getUserInfo()
    getUserPosts()
  }

  function sendFollow() {
    setButtonFollow(true)
    setButtonActive(true)
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/follows/${userId}`,
        {
          followerId: user.id,
          followedId: userId,
        },
        config,
      )
      .then((response) => {
        setButtonActive(false)
      })
      .catch((error) => {
        setButtonActive(false)
        const { status } = error
        if (
          status === 400 ||
          status === 401 ||
          status === 422 ||
          status === 500
        ) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.data,
          })
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Follow error!",
        })
      })
  }

  function sendUnfollow() {
    setButtonFollow(false)
    setButtonActive(true)
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
    axios
      .delete(`${process.env.REACT_APP_API_URL}/follows/${userId}`, config)
      .then((response) => {
        setButtonActive(false)
      })
      .catch((error) => {
        setButtonActive(false)
        const { status } = error
        if (
          status === 400 ||
          status === 401 ||
          status === 422 ||
          status === 500
        ) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.data,
          })
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Unfollow error!",
        })
      })
  }

  function verifyPageUser() {
    if (user.id === parseInt(userId)) {
      return null
    } else {
      return showFollowButton()
    }
  }

  function showFollowButton() {
    return buttonFollow === true ? (
      <S.unFollowButton onClick={sendUnfollow} disabled={buttonActive}>
        {" "}
        <p>Unfollow</p>{" "}
      </S.unFollowButton>
    ) : (
      <S.FollowButton onClick={sendFollow} disabled={buttonActive}>
        {" "}
        <p>Follow</p>{" "}
      </S.FollowButton>
    )
  }

  function getButtonFollow() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/follows/${userId}`, config)
      .then((response) => {
        setButtonFollow(response.data.followState)
      })
      .catch((error) => {})
  }

  return (
    <S.PageContainer>
      {userInfo && (
        <PageLabel>
          <div>
            <S.LabelProfileImage
              src={userInfo.profileImage}
              alt={userInfo.username}
            />{" "}
            {userInfo.username}'s posts
          </div>
          {verifyPageUser()}
        </PageLabel>
      )}
      {loadUserInfoFail && <PageLabel>Oops...</PageLabel>}
      <S.ContentWrapper>
        <S.MainContentWrapper>
          <Posts>
            {loadedPosts &&
              posts &&
              posts.map((post, i) => {
                return (
                  <Post
                    key={i}
                    post={post}
                    handleTryLoadAgain={() => handleTryLoadAgain()}
                    refreshPage={() => setRefreshPage(!refreshPage)}
                  />
                )
              })}
            {!loadedPosts && (
              <S.LoadingPosts>
                <LineWave
                  color="red"
                  firstLineColor={theme.colors.text1}
                  middleLineColor={theme.colors.linkPreviewBorder}
                  lastLineColor={theme.colors.secondary}
                  height={200}
                  width={200}
                  ariaLabel="three-circles-rotating"
                />
              </S.LoadingPosts>
            )}
            {loadPostsFail && (
              <S.ErrorLoadMessage>
                <p>
                  An error occured while trying to fetch the posts, please
                  refresh the page or click{" "}
                  <span onClick={handleTryLoadAgain}>here</span> to try again.
                </p>
              </S.ErrorLoadMessage>
            )}
            {posts && posts.length === 0 && (
              <S.NoPostsContainer>
                <p>There are no posts yet.</p>
              </S.NoPostsContainer>
            )}
          </Posts>
        </S.MainContentWrapper>
        <S.SecondaryContentWrapper>
          <Trending></Trending>
        </S.SecondaryContentWrapper>
      </S.ContentWrapper>
    </S.PageContainer>
  )
}
