import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import * as S from "../../../styles/style.js"

export default function Trending() {
  const URL = `${process.env.REACT_APP_API_URL}/trending`
  const [hashtags, setHashtags] = useState(() => {
    getHashtags()
  })
  const [loadTrendingsFail, setLoadTrendingsFail] = useState(false)

  const navigate = useNavigate()

  function getHashtags() {
    axios
      .get(URL)
      .then((response) => {
        setHashtags([...response.data])
      })
      .catch((error) => {
        setLoadTrendingsFail(true)
      })
  }

  return (
    <S.TrendingBox>
      <S.Title>trending</S.Title>
      {hashtags &&
        hashtags.map((hashtag, i) => (
          <S.Trends
            key={i}
            onClick={() => navigate(`/hashtag/${hashtag.name}`)}
          >
            # {hashtag.name}
          </S.Trends>
        ))}
      {loadTrendingsFail && (
        <S.ErrorLoadTrendsMessage>
          <p>
            An error occured while trying to fetch trendings, please refresh the
            page.
          </p>
        </S.ErrorLoadTrendsMessage>
      )}
      {hashtags && hashtags.length === 0 && (
        <S.ErrorLoadTrendsMessage>
          <p>There are no hashtags yet.</p>
        </S.ErrorLoadTrendsMessage>
      )}
    </S.TrendingBox>
  )
}
