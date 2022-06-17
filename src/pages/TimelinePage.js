import React, { useState } from "react"
import axios from "axios"
import { LineWave } from "react-loader-spinner"
import { useTheme } from "styled-components"

import PageLabel from "../components/shared/Labels/PageLabel.js"
import Posts from "../components/shared/Posts/Posts.js"
import api from "../components/api/api.js"

import * as S from "../styles/style.js"
import Post from "../components/shared/Posts/Post"

export default function TimelinePage() {
  const [posts, setPosts] = useState(() => {
    getPosts()
  })
  const [loadedPosts, setLoadedPosts] = useState(false)
  const [loadPostsFail, setLoadPostsFail] = useState(false)
  const [publication , setPublication] = useState({shared_url: "", message: ""});
  const [loadingPublish, setLoadingPublish] = useState("Publish");
  const [activeButtonPublish, setActiveButtonPublish] = useState(false);

  const theme = useTheme()

  function publishUrl(e) {
    e.preventDefault()

    setActiveButtonPublish(true)
    setLoadingPublish("Publishing...")

    api.post("/publish", publication)
      .then(res => {
        console.log(res)
        setActiveButtonPublish(false)
        setLoadingPublish("Publish")
        setPublication({shared_url: "", message: ""})
      })
      .catch(err => {
        console.log(err)
        setLoadingPublish("Publish")
        alert("Houve um erro ao publicar seu link")
        setActiveButtonPublish(false)
        setPublication({shared_url: "", message: ""});

      })
  }

  function getPosts() {
    const LIMIT = 20
    const ORDERBY = "created_at"
    const ORDER_DIR = "desc"

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/posts?limit=${LIMIT}&order=${ORDERBY}&direction=${ORDER_DIR}`,
      )
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
    getPosts()
  }

  // TODO put image of user in publishBox
  return (
    <S.PageContainer>
      <PageLabel>timeline</PageLabel>
      <S.PublishBox>
            <img alt="" src="" /> 
            <h2>What are you going to share today?</h2>
            <form className="input-box" onSubmit={publishUrl} >
              <input className="input-url"
                  type="text"
                  disabled={activeButtonPublish}
                  placeholder="http://..." 
                  value={publication.shared_url} 
                  onChange={(e)=>setPublication({...publication, shared_url: e.target.value})}/>

              <input className="input-message" 
                  type="text" 
                  disabled={activeButtonPublish}
                  placeholder="What's on your mind?" 
                  value={publication.message} 
                  onChange={(e)=>setPublication({...publication, message: e.target.value})}/>
              <button className="button-publish" type="submit">{loadingPublish}</button>
            </form>
        </S.PublishBox>
      <Posts>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
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
              An error occured while trying to fetch the posts, please refresh
              the page or click <span onClick={handleTryLoadAgain}>here</span>{" "}
              to try again.
            </p>
          </S.ErrorLoadMessage>
        )}
        {posts && posts.length === 0 && (
          <S.NoPostsContainer>
            <p>There are no posts yet.</p>
          </S.NoPostsContainer>
        )}
      </Posts>
    </S.PageContainer>
  )
}
