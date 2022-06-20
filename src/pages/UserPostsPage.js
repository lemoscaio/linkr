import React, { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { LineWave } from "react-loader-spinner"
import { useTheme } from "styled-components"

import PageLabel from "../components/shared/Labels/PageLabel.js"
import Posts from "../components/shared/Posts/Posts.js"
import UpdatePost from "../components/shared/Posts/updatePost.js"
import Trending from "../components/shared/Trending/Trending.js"

import * as S from "../styles/style.js"

export default function UserPostsPage() {
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

  const theme = useTheme()

  function getUserInfo() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${userId}`)
      .then((response) => {
        setUserInfo(response.data)
      })
      .catch((error) => {
        setLoadUserInfoFail(true)
      })
  }

  function getUserPosts() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${userId}`)
      .then((response) => {
        setPosts(response.data)
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

  return (
    <S.PageContainer>
      {userInfo && (
        <PageLabel>
          <S.LabelProfileImage
            src={userInfo.profileImage}
            alt={userInfo.username}
          />{" "}
          {userInfo.username}'s posts
        </PageLabel>
      )}
      {loadUserInfoFail && <PageLabel>Oops...</PageLabel>}
      <S.ContentWrapper>
        <S.MainContentWrapper>
          <Posts>
            {posts &&
              posts.map((post) => {
                return <UpdatePost key={post.id} post={post} userIdparams={userId} />
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
