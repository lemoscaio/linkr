import React from "react"
import { useNavigate } from "react-router-dom"
import { IconContext } from "react-icons"
import { DebounceInput } from "react-debounce-input"
import axios from "axios"

import { AiOutlineSearch } from "react-icons/ai"
import * as S from "../../styles/style.js"

export default function SearchBar() {
  const [username, setUsername] = React.useState("")
  const [data, setData] = React.useState([])

  const navigate = useNavigate()

  async function sendSearchUsername(e) {
    e.preventDefault()
    const URL = `${process.env.REACT_APP_API_URL}/user?username=${username}`
    console.log(username.length)
    axios
      .get(URL, username)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  console.log(data)

  return (
    <S.Container>
      <S.SearchBarContainer>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          placeholder="Search for people and friends"
          className="search-bar-input"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            if (username.length === 3) {
              sendSearchUsername(e)
            }
          }}
        />
        <IconContext.Provider value={{ color: "#C6C6C6", size: "1.3rem" }}>
          <AiOutlineSearch onClick={sendSearchUsername} />
        </IconContext.Provider>
      </S.SearchBarContainer>
      <S.SearchBarResults
      /*  className={
          username.length >= 3
            ? "search-bar-results-active"
            : "search-bar-results-hidden"
        } */
      >
        {data.map((user) => (
          <S.SearchBarResultUser
            key={user.userId}
            onClick={(e) => {
              navigate(`/user/${user.userId}`)
            }}
          >
            <S.SearchBarResultImage src={user.profileImage} alt="profile" />
            <S.SearchBarResultName>{user.username}</S.SearchBarResultName>
          </S.SearchBarResultUser>
        ))}
      </S.SearchBarResults>
    </S.Container>
  )
}
