import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { IconContext } from "react-icons"
import { DebounceInput } from "react-debounce-input"

import { AiOutlineSearch } from "react-icons/ai"
import * as S from "../../styles/style.js"

export default function SearchBar() {
  const [data, setData] = React.useState([])

  const navigate = useNavigate()

  async function sendSearchUsername(username) {
    const URL = `${process.env.REACT_APP_API_URL}/user?username=${username}`
    if (username.length > 2) {
      axios
        .get(URL)
        .then((res) => {
          setData(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setData([])
    }
  }

  return (
    <S.ContainerDesktop>
      <S.SearchBarContainerDesktop>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for people and friends"
          className="search-bar-input"
          onChange={(e) => {
            sendSearchUsername(e.target.value)
          }}
        />
        <IconContext.Provider value={{ color: "#C6C6C6", size: "1.3rem" }}>
          <AiOutlineSearch onClick={sendSearchUsername} cursor="pointer" />
        </IconContext.Provider>
      </S.SearchBarContainerDesktop>
      <S.SearchBarResultsDesktop>
        {data.map((user) => (
          <S.SearchBarResultUser
            key={user.userId}
            onClick={(e) => {
              setData([])
              navigate(`/user/${user.userId}`)
            }}
          >
            <S.SearchBarResultImage src={user.profileImage} alt="profile" />
            <S.SearchBarResultName>{user.username}</S.SearchBarResultName>
          </S.SearchBarResultUser>
        ))}
      </S.SearchBarResultsDesktop>
    </S.ContainerDesktop>
  )
}