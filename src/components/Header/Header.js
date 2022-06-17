/* eslint-disable no-restricted-globals */
import React, { useContext } from "react"

import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

import profilePic from "../../assets/profile-placeholder.jpg"

import * as S from "../../styles/style.js"

import { MenuContext } from "../../contexts/MenuContext.js"
import { Navbar } from "./Navbar"
import { NavItem } from "./NavItem"
import { NavItemHidden } from "./NavItemHidden"
import { DropdownMenu } from "./DropdownMenu"
import { UserContext } from "../../contexts/UserContext"
import axios from "axios"

export default function Header() {
  const navigate = useNavigate()
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext)
  const { user, setUser } = useContext(UserContext)
  const URL = `${process.env.REACT_APP_API_URL}/session`
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  async function logOut() {
    const confirmation = confirm("Really want to logout?")
    if (confirmation) {
      try {
        await axios.delete(URL, config)
        handleMenuClick()
        localStorage.removeItem("user")
        setUser({
          ...user,
          username: "",
          email: "",
          profile_image: "",
          token: "",
        })
        navigate("/")
      } catch ({ response }) {
        alert(response.data)
      }
    }
  }

  return (
    <S.Header>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>
      <Navbar>
        <NavItem>
          {menuIsOpen ? (
            <IoIosArrowUp onClick={handleMenuClick} />
          ) : (
            <IoIosArrowDown onClick={handleMenuClick} />
          )}
          <NavItemHidden>
            <DropdownMenu>
              <span onClick={logOut}>Logout</span>
            </DropdownMenu>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img onClick={handleMenuClick} src={profilePic} alt="" />
        </NavItem>
      </Navbar>
    </S.Header>
  )
}
