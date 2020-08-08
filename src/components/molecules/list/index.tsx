import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/paragraph";

type Prize = {
  title: string;
  total: string;
};

type Props = {
  prizeList: Prize[];
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 300px;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f5f4fe;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f9cb11;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d8b00f;
  }
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #f5f4fe;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  & > p {
    flex: 1;
  }
  & > .title-col {
    flex: 10;
  }
`;

const List: React.FunctionComponent<Props> = ({ prizeList }) => {
  return (
    <Container>
      {prizeList.map((prize, index) => (
        <Row>
          <Paragraph size="medium" textColor="black" bold>
            {index + 1}
          </Paragraph>
          <Paragraph className="title-col" size="medium" textColor="black" bold>
            {prize.title}
          </Paragraph>
          <Paragraph size="medium" textColor="black" bold>
            {prize.total}
          </Paragraph>
        </Row>
      ))}
    </Container>
  );
};

export default List;
