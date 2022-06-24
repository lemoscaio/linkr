import React, { useState } from "react"
import axios from "axios"
import { LineWave } from "react-loader-spinner"
import { useTheme } from "styled-components"
import { IoReloadCircle } from "react-icons/io5"
import useInterval from "react-useinterval"

import PageLabel from "../components/shared/Labels/PageLabel.js"
import PublishBox from "../components/shared/PublishBox/PublishBox.js"
import Posts from "../components/shared/Posts/Posts.js"
import Post from "../components/shared/Posts/Post"
import Trending from "../components/shared/Trending/Trending.js"
import SearchBarMobile from "../components/SearchBar/SearchBarMobile.js"

import * as S from "../styles/style.js"
import { useAuth } from "../hooks/useAuth.js"

export default function TimelinePage() {
  const { user } = useAuth()
  const [posts, setPosts] = useState(() => {
    getPosts()
  })
  const [loadedPosts, setLoadedPosts] = useState(false)
  const [loadPostsFail, setLoadPostsFail] = useState(false)
  const [followCount, setFollowCount] = useState(() => {
    getFollowCount()
  })
  const [newPosts, setNewPosts] = useState()
  const [lastPostCreateTime, setLastPostCreateTime] = useState(0)
  useInterval(getNewPosts, 15000)

  const theme = useTheme()

  function handleNewpostsClick() {
    setPosts([...newPosts, ...posts])
    setLastPostCreateTime(newPosts[0].createdAt)
    setNewPosts([])
  }

  function getFollowCount() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/follows`, config)
      .then((response) => {
        if (response.status === 204) setFollowCount(0)
        else setFollowCount(response.data)
      })
      .catch((error) => {})
  }

  function getPosts() {
    const LIMIT = 20
    const ORDERBY = "createdAt"
    const ORDER_DIR = "desc"

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/posts?limit=${LIMIT}&order=${ORDERBY}&direction=${ORDER_DIR}`,
        config,
      )
      .then((response) => {
        setPosts([...response.data])
        setLoadedPosts(true)
      })
      .catch((error) => {
        setLoadedPosts(true)
        setLoadPostsFail(true)
      })
  }

  function getNewPosts() {
    const ORDERBY = "createdAt"
    const ORDER_DIR = "desc"

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }

    if (posts && lastPostCreateTime) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/posts?order=${ORDERBY}&direction=${ORDER_DIR}&from_time=${lastPostCreateTime}`,
          config,
        )
        .then((response) => {
          setNewPosts([...response.data])
        })
        .catch((error) => {})
    } else if (posts && !lastPostCreateTime) {
      setLastPostCreateTime(posts[0]?.createdAt)
    }
  }

  function handleTryLoadAgain() {
    setLoadedPosts(false)
    setLoadPostsFail(false)
    getPosts()
  }

  return (
    <S.PageContainer>
      <SearchBarMobile />
      <PageLabel>timeline</PageLabel>
      <S.ContentWrapper>
        <S.MainContentWrapper>
          <PublishBox posts={posts} setPosts={setPosts} />
          {newPosts?.length > 0 && (
            <S.LoadPostsButtonContainer onClick={handleNewpostsClick}>
              <S.Button2>
                {newPosts.length} new posts, load more!{" "}
                <span>
                  <IoReloadCircle />
                </span>
              </S.Button2>
            </S.LoadPostsButtonContainer>
          )}
          <Posts>
            {loadedPosts &&
              posts &&
              posts.map((post, i) => {
                return (
                  <Post
                    key={i}
                    post={post}
                    handleTryLoadAgain={() => handleTryLoadAgain()}
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
                {followCount === 0 ? (
                  <p>You don't follow anyone yet. Search for new friends!</p>
                ) : (
                  <p>No posts found from your friends.</p>
                )}
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
