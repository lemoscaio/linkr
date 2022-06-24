import styled from "styled-components"
import { FaRegPaperPlane } from "react-icons/fa"

export const CommentsBox = styled.div`
  position: relative;
  top: -25px;
  border-radius: 16px;
  background-color: #1E1E1E;
  padding: 0 10px 0 10px;

`

export const Comment = styled.div`

border-bottom: 1px solid #353535;
display: flex;
align-items: center;
padding: 10px 0 10px 0;


img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 6px 0 33px;
  object-fit: cover;
}

h1 {
  color: #F3F3F3;
  max-width: 510px;
  word-break: break-word;
  font-weight: 700;
  font-size: 14px;
}

p {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ACACAC;
}

div {
  gap: 10px;
  margin-left: 15px;
  padding-left: 0px;
}

h2 {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #565656;

}

span {
  color: #F3F3F3;
  font-weight: bold;
  max-width: 510px;
  word-break: break-word;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
}

`

export const AddComment = styled.form`

input {
  width: 600px;
  padding: 0 40px 0 11px;
  height: 39px;
  background-color: #252525;
  border-radius: 8px;
  color: #ACACAC;
  border: none;
}
`

export const IconSend = styled(FaRegPaperPlane)`
  font-size: 25px;
  color: #F3F3F3;
  
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoints.laptop}) {
    width: 18px;
    height: 18px;
  }
`

export const ButtonSend = styled.button`
    background-color: Transparent;
    position: absolute;
    left: 92%;
    border: none;

`;