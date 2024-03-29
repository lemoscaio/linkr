import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { IconContext } from "react-icons"
import { DebounceInput } from "react-debounce-input"

import { AiOutlineSearch } from "react-icons/ai"
import * as S from "../../styles/style.js"
import { useAuth } from "../../hooks/useAuth.js"

export default function SearchBar() {
  const { user } = useAuth()
  const [data, setData] = React.useState([])

  const navigate = useNavigate()

  async function sendSearchUsername(username) {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }
    const URL = `${process.env.REACT_APP_API_URL}/user?username=${username}`
    if (username.length > 2) {
      axios
        .get(URL, config)
        .then((res) => {
          setData(res.data)
        })
        .catch((error) => {})
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
        {data.map((userSearch) => (
          <S.SearchBarResultUser
            key={userSearch.id}
            onClick={(e) => {
              setData([])
              navigate(`/user/${userSearch.id}`)
              window.location.reload()
            }}
          >
            <S.SearchBarResultImage
              src={userSearch.profile_image}
              alt="profile"
            />
            <S.SearchBarResultName>{userSearch.username}</S.SearchBarResultName>
            {userSearch.followed === user.id ? (
              <S.SearchBarResultFollow>
                <p> ● following </p>{" "}
              </S.SearchBarResultFollow>
            ) : null}
          </S.SearchBarResultUser>
        ))}
      </S.SearchBarResultsDesktop>
    </S.ContainerDesktop>
  )
}
