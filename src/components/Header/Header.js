import React, { useContext } from "react"

import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"

import profilePic from "../../assets/profile-placeholder.jpg"

import * as S from "../../styles/style.js"

import { MenuContext } from "../../contexts/MenuContext.js"
import { Navbar } from "./Navbar"
import { NavItem } from "./NavItem"
import { NavItemHidden } from "./NavItemHidden"
import { DropdownMenu } from "./DropdownMenu"

export default function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext)

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <S.Header>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>
      <Navbar>
        <NavItem>
          <IoIosArrowDown onClick={handleMenuClick} />
          <NavItemHidden>
            <DropdownMenu>
              <span onClick={() => {}}>Logout</span>
            </DropdownMenu>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img src={profilePic} alt="" />
        </NavItem>
      </Navbar>
    </S.Header>
  )
}
