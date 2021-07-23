import React from "react";
import { TitleH2, UserImage, Container } from "./Stats.styles";
const Stats = ({ title, value, userImg }) => {
  return (
    <Container>
      <TitleH2>{title}</TitleH2>
      <UserImage>
        {userImg && <img src={userImg} alt="user" />} {value}
      </UserImage>
    </Container>
  );
};

export default Stats;
