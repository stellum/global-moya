import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const MainContainer = styled.div`
  width: 100%;
  height: 20px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  height: 56px;
  h3 {
    text-align: center;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    width: 100%;
    margin: 0 auto;
    position: relative;
    svg {
      position: absolute;
      margin-left: 20px;
    }
  }
`;

export const AccountInfo = styled.div`
  width: 600px;
  padding-left: 15px;
  padding-right: 15px;
  /* width: 360px; */
  height: 216px;
  background: ${colors.gray150};
  /* margin: 0 auto; */
`;

export const Account = styled.div`
  position: relative;
  span {
    font-size: ${fontSize.FontSize22};
    font-weight: ${fontWeight.FontWeight600};
    left: 44px;
    bottom: 27px;
    position: absolute;
  }
  p {
    font-size: ${fontSize.FontSize16};
    font-weight: ${fontWeight.FontWeight400};
    color: #1a1a1a;
    line-height: 22px;
    margin-bottom: 16px;
    letter-spacing: -0.2px;
    color: #1a1a1a;
  }
  svg {
    display: block;
    padding-top: 10px;
  }
`;

export const SubscriptionInfo = styled.div`
  width: 100%;
  height: 110px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: #2a2a2a;
    margin-left: 16px;
  }
  button {
    width: 69px;
    height: 24px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    margin-left: 102px;
    margin-top: 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: inline-block;
    letter-spacing: -0.2px;
    background: #ffffff;
    /* Gray/Gray400 */

    color: #b7b7b7;
  }
`;
export const Subscription = styled.table`
  font-size: ${fontSize.FontSize14};
  color: ${colors.gray500};
  line-height: 22px;
  font-weight: ${fontWeight.FontWeight500};
  margin-left: 16px;
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  th:last-child {
    margin-left: 101px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    /* Gray/Gray500 */
    color: #949494;
  }
  td:last-child {
    margin-left: 101px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    /* Gray/Gray500 */
    color: #949494;
  }
  p {
    margin-left: 101px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    /* Gray/Gray500 */
    color: #949494;
  }
`;
export const Menu = styled.ul`
  margin-left: 16px;
  margin-top: 20px;
  position: relative;
`;

export const Settings = styled.ul`
  /* 계정 관리 */
  li:nth-child(1) {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    /* Gray/Gray400 */
    color: #b7b7b7;
  }
  /* 비밀번호 재설정 */
  li:nth-child(2) {
    width: 360px;
    height: 44px;
    left: 0px;
    top: 343px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    /* Gray/Gray800 */
    color: #2a2a2a;
  }
  div {
    margin-top: 15px;
  }
  svg {
    right: 10px;
    position: absolute;
    fill: none;
    stroke: white;
    stroke-width: 2px;
    position: absolute;
  }
`;

export const Help = styled.div`
  div {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    /* Gray/Gray400 */
    color: #b7b7b7;
  }
  ul {
    margin-top: 15px;
    li {
      width: 360px;
      height: 44px;
    }
  }
  svg {
    right: 10px;
    position: absolute;
    fill: none;
    stroke: white;
    stroke-width: 2px;
  }
`;
