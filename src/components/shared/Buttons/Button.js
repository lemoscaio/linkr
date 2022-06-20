import * as S from "../../../styles/style.js"
import { ThreeDots } from "react-loader-spinner"

export default function Button({ type, disabled, text }) {
  return (
    <S.Button type={type} disabled={disabled}>
      {disabled ? (
        <ThreeDots color="#FFFFFF" height="46" width="46" ariaLabel="loading" />
      ) : (
        text
      )}
    </S.Button>
  )
}
