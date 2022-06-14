import * as S from "../styles/style.js"
import { ThreeDots } from "react-loader-spinner"

export const Button = ({ type, disable, text }) => {
  return (
    <S.Button type={type} disabled={disable}>
      {disable ? (
        <ThreeDots color="#FFFFFF" height="46" width="46" ariaLabel="loading" />
      ) : (
        text
      )}
    </S.Button>
  )
}
