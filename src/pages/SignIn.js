/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "../styles/style.js"
import Input from "../components/shared/Inputs/Input.js"
import Button from "../components/shared/Buttons/Button.js"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { UserContext } from "../contexts/UserContext.js"
import Swal from "sweetalert2"

export default function SignIn() {
  const navigate = useNavigate()
  const URL = `${process.env.REACT_APP_API_URL}/signin`
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  })
  const [disabled, setDisabled] = useState(false)

  const { user, setUser } = useContext(UserContext)

  async function Login(event) {
    event.preventDefault()
    setDisabled(true)
    try {
      const res = await axios.post(URL, userSignin)
      const { data } = res
      const { username, email, profileImage, token, id } = data
      setUser({ ...user, username, email, profileImage, token, id })
      console.log("Teste de id", id)
      const userSerialized = JSON.stringify({
        username,
        email,
        profileImage,
        token,
        id,
      })
      localStorage.setItem("user", userSerialized)
      navigate("/timeline")
    } catch ({ response }) {
      setDisabled(false)
      const { status } = response
      if (
        status === 400 ||
        status === 401 ||
        status === 422 ||
        status === 500
      ) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data,
        })
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sign in error!",
      })
    }
  }

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }
  const autoLoginUrl = `${process.env.REACT_APP_API_URL}/auto-login`
  useEffect(() => {
    async function autoLogin() {
      if (user.token?.length) {
        try {
          await axios.post(autoLoginUrl, {}, config)
          navigate("/timeline")
        } catch ({ response }) {
          const { status } = response
          if (
            status === 400 ||
            status === 401 ||
            status === 422 ||
            status === 500
          ) {
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data,
            })
          }
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Auto login error!",
          })
        }
      }
    }
    autoLogin()
  }, [])

  return (
    <S.AuthContainer>
      <S.AuthLogo>
        <S.BoxAuthLogo>
          <h1>linkr</h1>
          <span>
            save, share and discover <br /> the best links on the web
          </span>
        </S.BoxAuthLogo>
      </S.AuthLogo>
      <S.AuthForm onSubmit={Login}>
        <Input
          type="email"
          name="email"
          id="email"
          required
          placeholder="e-mail"
          onChange={(e) =>
            setUserSignin({ ...userSignin, email: e.target.value })
          }
          value={userSignin.email}
          disabled={disabled}
          message="Email inválido"
        />
        <Input
          type="password"
          name="password"
          id="password"
          required
          placeholder="password"
          onChange={(e) =>
            setUserSignin({ ...userSignin, password: e.target.value })
          }
          value={userSignin.password}
          disabled={disabled}
          minLength="3"
          pattern="^[a-zA-Z0-9]{3,}$"
          message="Apenas letras e números. Tamanho mínimo de 3 caracteres."
        />
        <Button type="submit" disabled={disabled} text="Log In" />
        <Link to="/sign-up">
          <span>First time? Create an account!</span>
        </Link>
      </S.AuthForm>
    </S.AuthContainer>
  )
}
