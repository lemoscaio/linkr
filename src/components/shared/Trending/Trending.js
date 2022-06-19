import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import * as S from "../../../styles/style.js"
import { Title, Trends } from "./style.js"

export default function Trending() {
  const URL = `${process.env.REACT_APP_API_URL}/trending`
  const [hashtags, setHashtags] = useState([])
  const [loadPostsFail, setLoadPostsFail] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getHashtags()
  }, [])

  async function getHashtags() {
    try {
      const result = await axios.get(URL)
      setHashtags(result.data)
    } catch {
      setLoadPostsFail(true)
    }
  }

  function handleTryLoadAgain() {
    setLoadPostsFail(false)
    getHashtags()
  }

  return (
    <S.TrendingBox>
      <Title>trending</Title>
      {loadPostsFail && (
        <S.ErrorLoadMessage>
          <p>
            An error occured while trying to fetch trendings, please refresh the
            page or click <span onClick={handleTryLoadAgain}>here</span> to try
            again.
          </p>
        </S.ErrorLoadMessage>
      )}
      {hashtags.map((hashtag, i) => (
        <Trends key={i} onClick={() => navigate(`/hashtag/${hashtag.name}`)}>
          # {hashtag.name}
        </Trends>
      ))}
    </S.TrendingBox>
  )
}
