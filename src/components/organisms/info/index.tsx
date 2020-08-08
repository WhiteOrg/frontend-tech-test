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

const Container = styled.section``;

const TitleRow = styled.div``;

const InfoRow = styled.div``;

const Info: React.FunctionComponent<Props> = (props) => (
  <Container>
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
