import styled, { css } from "styled-components";

//Countdown styles
export const CountdownContainer = styled.div`
  display: inline-flex;
  p,
  span {
    height: 30px;
    font-family: "Barlow Condensed";
    font-size: 22px;
    font-weight: 400;
    line-height: 1.4;
    color: #ffffff;
    display: flex;
    align-self: center;
  }
`;

export const Rectangle = styled.div`
  color: #ffffff;
  display: flex;
  min-width: 30px;
  height: 30px;
  border-radius: 6px;
  border: solid 2px #ffffff;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 18px;
  box-sizing: border-box;
`;

//Header styles
export const HeaderWrapper = styled.header`
  padding: 20px 20px 30px 20px;
  @media screen and (min-width: 740px) {
    padding: 49px 70px 40px 70px;
  }
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  section {
    display: flex;
    margin-top: 80px;
  }
  button {
    min-height: 44px;
    background-color: #f9cb11;
    font-family: "Barlow Condensed";
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.88px;
    color: #0a0052;
    border-radius: 3px;
    &:hover {
      border: 2px solid goldenrod;
      cursor: pointer;
    }
    @media screen and (min-width: 740px) {
      max-width: 300px;
    }
  }
`;

export const InnerWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    font-size: 34px;
    font-weight: 400;
    font-family: "Barlow Condensed";
    line-height: 1.03;
    letter-spacing: -0.77px;
    color: #ffffff;
    margin-top: 0px;
    @media screen and (min-width: 740px) {
      font-size: 48px;
      font-weight: 600;
    }
  }
  > img {
    width: 34px;
    height: 34px;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      width: 103px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: flex-start;
      margin-bottom: 0px;
      h1 {
        font-family: "Barlow condensed";
        font-size: 26px;
        font-weight: 500;
        color: #ffffff;
        margin: 3px 0px 0px 0px;
      }
      p {
        font-family: "Barlow condensed";
        font-size: 14px;
        font-weight: 500;
        color: #17dfe7;
      }
      div {
        display: flex;
        align-items: baseline;
        h1 {
          margin-top: 0px;
        }
        img {
          margin-right: 3px;
        }
      }
    `}
  ${({ secondary, player }) =>
    secondary &&
    player &&
    css`
      margin-left: 32px;
      div {
        margin-top: 3px;
      }
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      justify-content: flex-start;
      align-items: center;
      margin: 22px 0px 31px 0px;
      img {
        width: 18px;
        height: 20px;
        margin-right: 12px;
      }
      p {
        font-family: "Barlow condensed";
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
    `}
`;
