import React from "react"
import { IconContext } from "react-icons"

import { AiOutlineSearch } from "react-icons/ai";
import * as S from "../../styles/style.js"


export default function SearchBar() {
  return (
    <S.SearchBarContainerDesktop>
      <S.SearchBarInput placeholder="Search for people and friends"/>
      <IconContext.Provider value={{ color: "#C6C6C6", size: "1.3rem" }}>
        <AiOutlineSearch/>
      </IconContext.Provider>
      </S.SearchBarContainerDesktop>
  )
}

