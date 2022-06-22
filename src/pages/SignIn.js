/* eslint-disable react-hooks/exhaustive-deps */
import * as S from "../styles/style.js"
import Input from "../components/shared/Inputs/Input.js"
import Button from "../components/shared/Buttons/Button.js"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useAuth } from "../hooks/useAuth.js"

export default function SignIn() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const URL = `${process.env.REACT_APP_API_URL}/signin`
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  })
  const [disabled, setDisabled] = useState(false)

  function handleLogin(event) {
    event.preventDefault()
    setDisabled(true)

    axios
      .post(URL, userSignin)
      .then(async (response) => {
        const { data } = response
        try {
          await login(data)
          navigate("/timeline", { replace: true })
        } catch (error) {
          console.log("🚀 ~ error", error)
        }
      })
      .catch((error) => {
        console.log("🚀 ~ error", error)
        setDisabled(false)
        const { status } = error
        if (
          status === 400 ||
          status === 401 ||
          status === 422 ||
          status === 500
        ) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.data,
          })
        }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign in error!",
        })
      })
  }

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
      <S.AuthForm onSubmit={handleLogin}>
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
