import React from "react";
import styled from "styled-components";
import CountDown from "../../molecules/countdown";
import PoolInfo from "../../molecules/pool_info";
import StartDate from "../../molecules/start_date";
import { TitleH1 } from "../../atoms/title";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import close from "../../../images/close.svg";
import user from "../../../images/user.svg";
import calendar from "../../../images/calendar.svg";

type Props = {
  readonly title: string;
  readonly prizePool: string;
  readonly players: number;
  readonly startDate: string;
  readonly endDate: string;
  readonly backgroundImage: string;
};

interface PropsContainer {
  readonly backgroundImage: string;
}

const Container = styled.section<PropsContainer>`
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.backgroundImage});
  max-width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 400px;
  padding: 20px;
  justify-content: space-between;
  & > button {
    @media (min-width: 1200px) {
      max-width: 30%;
    }
  }
`;

const TitleRow = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  & > img {
    align-self: baseline;
  }
`;

const InfoRow = styled.div`
  display: flex;
  max-width: 75%;
  justify-content: space-between;
  @media (min-width: 1200px) {
    max-width: 20%;
  }
`;

const Info: React.FunctionComponent<Props> = (props) => (
  <Container backgroundImage={props.backgroundImage}>
    <TitleRow>
      <TitleH1 textColor="white">{props.title}</TitleH1>
      <Icon src={close} rotate={false} />
    </TitleRow>
    <CountDown endDate={props.endDate} />
    <InfoRow>
      <PoolInfo title="prizePool" info={props.prizePool} />
      <PoolInfo title="player" info={props.players.toString()} icon={user} />
    </InfoRow>
    <StartDate startDate={props.startDate} icon={calendar} />
    <Button>Join</Button>
  </Container>
);

export default Info;
