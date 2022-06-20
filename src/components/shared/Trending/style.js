import styled from "styled-components"

import { ErrorLoadMessage } from "../Posts/style.js"

export const TrendingBox = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 16px;
  width: 100%;
  height: auto;
  font-weight: 700;
  padding-bottom: 7px;
`

export const Title = styled.div`
  font-size: 27px;
  line-height: 40px;
  border-bottom: 1px solid #484848;
  padding: 9px 0px 12px 16px;
`

export const Trends = styled.div`
  font-size: 17px;
  margin: 10px 10px 0px 0px;
  padding: 0px 0px 10px 16px;
  letter-spacing: 0.05em;

  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`

export const ErrorLoadTrendsMessage = styled(ErrorLoadMessage)`
  background: none;
  margin-top: 0;
  width: 90%;
`
