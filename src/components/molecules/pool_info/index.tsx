import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/paragraph";

type Props = {
  readonly title: string;
  readonly info: string;
  readonly icon?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    margin: 0;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70px;
  & > p {
    margin: 0;
  }
`;

const Icon = styled.img``;

const PoolInfo: React.FunctionComponent<Props> = ({ title, info, icon }) => {
  return (
    <Container>
      <Paragraph size="small" textColor="#17dfe7" upperCase>
        {title}
      </Paragraph>
      {icon ? (
        <Block>
          <Icon src={icon} />
          <Paragraph size="large" textColor="white" upperCase>
            {info}
          </Paragraph>
        </Block>
      ) : (
        <Paragraph size="large" textColor="white" upperCase>
          {info}
        </Paragraph>
      )}
    </Container>
  );
};

export default PoolInfo;
