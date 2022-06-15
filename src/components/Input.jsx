import { useState } from "react"
import * as S from "../styles/style.js"

export default function Input({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
  disabled,
  message,
  minLength,
  pattern,
  min,
  step,
}) {
  const [focused, setFocused] = useState(false)

  return (
    <S.InputBox>
      <input
        type={type}
        name={name}
        id={id}
        required
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        pattern={pattern}
        minLength={minLength}
        min={min}
        step={step}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span>{message}</span>
    </S.InputBox>
  )
}
