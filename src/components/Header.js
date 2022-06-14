import React, { useContext } from "react"

import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"

import profilePic from "../assets/profile-placeholder.jpg"

import * as S from "../styles/style.js"

import { MenuContext } from "../contexts/MenuContext.js"

export default function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext)
  console.log(S)

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <S.Header>
      <Link to="/">
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

function Navbar(props) {
  return (
    <nav>
      <ul> {props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  return <li>{props.children}</li>
}

function NavItemHidden(props) {
  const { menuIsOpen } = useContext(MenuContext)
  return <>{menuIsOpen && props.children}</>
}

function DropdownMenu(props) {
  return <S.DropdownMenu>{props.children}</S.DropdownMenu>
}
