import React from "react"
import { IconContext } from "react-icons"
import { DebounceInput } from "react-debounce-input"

import { AiOutlineSearch } from "react-icons/ai";
import * as S from "../../styles/style.js"


export default function SearchBar() {
  const [search, setSearch] = React.useState("")

  return (
    <S.SearchBarContainer>
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        placeholder="Search for people and friends"
        className="search-bar-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      <IconContext.Provider value={{ color: "#C6C6C6", size: "1.3rem" }}>
        <AiOutlineSearch/>
      </IconContext.Provider>
      </S.SearchBarContainer>
  )
}