import styled from "styled-components"

export const CommentsBox = styled.div`
  border-radius: 16px;
  background-color: #1E1E1E;
`

export const Comment = styled.div`

border-bottom: 1px solid #353535;
display: flex;
align-items: center;


img {
  width: 39px;
  height: 39px;
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

`