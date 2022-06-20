import React from "react"
import { IconContext } from "react-icons"
import { DebounceInput } from "react-debounce-input"
import axios from "axios"

import { AiOutlineSearch } from "react-icons/ai"
import * as S from "../../styles/style.js"

export default function SearchBar() {
  const [username, setUsername] = React.useState("")

  async function sendSearchUsername(e) {
    e.preventDefault()
    const URL = `${process.env.REACT_APP_API_URL}/user?username=${username}`

    axios
      .get(URL, username)
      .then((res) => {
        console.log(res.data)
        console.log(URL)
      })
      .catch((err) => {
        console.log(err)
        console.log(URL)
      })
  }

  return (
    <S.SearchBarContainer>
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        placeholder="Search for people and friends"
        className="search-bar-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <IconContext.Provider value={{ color: "#C6C6C6", size: "1.3rem" }}>
        <AiOutlineSearch onClick={sendSearchUsername} />
      </IconContext.Provider>
    </S.SearchBarContainer>
  )
}
