import React from "react"
import { IconContext } from "react-icons"
import { DebounceInput } from "react-debounce-input"
import axios from "axios"

import { AiOutlineSearch } from "react-icons/ai"
import * as S from "../../styles/style.js"

export default function SearchBar() {
  const [username, setUsername] = React.useState("")
  const [data, setData] = React.useState([])

  async function sendSearchUsername(e) {
    e.preventDefault()
    const URL = `${process.env.REACT_APP_API_URL}/user?username=${username}`
    console.log(username.length)
    if (username.length === 0) {
      setData([])
    }

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
  console.log(username.length)
  console.log(data)

  return (
    <S.Container>
      <S.SearchBarContainer>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for people and friends"
          className="search-bar-input"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            sendSearchUsername(e)
            if (e.target.value.length < 3) {
              setData([])
            }
          }}
        />
        <IconContext.Provider value={{ color: "#C6C6C6", size: "1.3rem" }}>
          <AiOutlineSearch onClick={sendSearchUsername} />
        </IconContext.Provider>
      </S.SearchBarContainer>
      <S.SearchBarResults
        className={
          username.length >= 3
            ? "search-bar-results-active"
            : "search-bar-results-hidden"
        }
      >
        {data.map((user) => (
          <S.SearchBarResultUser key={user.id}>
            <S.SearchBarResultImage src={user.profileImage} alt="profile" />
            <S.SearchBarResultName>{user.username}</S.SearchBarResultName>
          </S.SearchBarResultUser>
        ))}
      </S.SearchBarResults>
    </S.Container>
  )
}
