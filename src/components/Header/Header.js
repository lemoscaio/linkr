import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import axios from "axios"
import Modal from "react-modal"

import profilePic from "../../assets/profile-placeholder.jpg"

import * as S from "../../styles/style.js"

import { MenuContext } from "../../contexts/MenuContext.js"

import { Navbar } from "./Navbar"
import { NavItem } from "./NavItem"
import { NavItemHidden } from "./NavItemHidden"
import { DropdownMenu } from "./DropdownMenu"
import SearchBarDesktop from "../SearchBar/SearchBarDesktop.js"
import { useAuth } from "../../hooks/useAuth.js"

export default function Header() {
  const navigate = useNavigate()
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext)
  const [modalIsOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  Modal.setAppElement(document.querySelector(".root"))
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    handleMenuClick()
  }

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  async function handleLogoutClick() {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    }

    const URL = `${process.env.REACT_APP_API_URL}/session`
    try {
      await axios.delete(URL, config)
    } catch ({ response }) {
      console.log("Delete session error!", response)
    } finally {
      handleMenuClick()
      logout()
    }
  }

  return (
    <S.Header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <S.ModalStyle {...props}>{children}</S.ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <S.OverlayStyle {...props}>{contentElement}</S.OverlayStyle>
        )}
      >
        <span>Are you sure you want to logout?</span>
        <div>
          <button onClick={closeModal}>No, go back</button>
          <button onClick={handleLogoutClick}>Yes</button>
        </div>
      </Modal>
      <Link to="/timeline">
        <h1>linkr</h1>
      </Link>
      <SearchBarDesktop />
      <Navbar>
        <NavItem>
          {menuIsOpen ? (
            <IoIosArrowUp onClick={handleMenuClick} />
          ) : (
            <IoIosArrowDown onClick={handleMenuClick} />
          )}
          <NavItemHidden>
            <DropdownMenu>
              <span onClick={openModal}>Logout</span>
            </DropdownMenu>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img
            onClick={handleMenuClick}
            src={
              user?.profileImage?.length > 0 ? user.profileImage : profilePic
            }
            alt=""
          />
        </NavItem>
      </Navbar>
    </S.Header>
  )
}
