import React from "react";
import {
  Container,
  Heading,
  Content,
  ListContainer,
  ListItem,
  Index,
  Title,
  Prize,
} from "./PrizeList.styles";
import refresh from "../../images/refresh.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

const PrizeList = ({ data, refreshData, isLoading, error }) => {
  const convertCurrencyToNumber = (data) => {
    if (data) {
      const convertedArray = data.map((item) => ({
        title: item.title,
        total: item.total,
        sortingIndex: parseFloat(item.total.replace(/[£,]/g, "")),
      }));
      return convertedArray;
    }
  };

  const sortData = (unsortedData) => {
    if (unsortedData) {
      const sortedData = unsortedData.sort(
        (a, b) => b.sortingIndex - a.sortingIndex
      );
      return sortedData;
    }
  };

  const convertedData = convertCurrencyToNumber(data);
  const finalData = sortData(convertedData);

  return (
    <Container>
      <Heading>
        <SectionTitle title="Prize List" />
        <img onClick={refreshData} src={refresh} alt="refresh-icon" />
      </Heading>
      <Content>
        <ListContainer>
          {error && <div>Couldn't fetch data</div>}
          {isLoading ? (
            <div>Refreshing...</div>
          ) : (
            finalData &&
            finalData.map((prize, index) => (
              <ListItem key={index}>
                <Index>{index + 1}</Index>
                <Title>{prize.title}</Title>
                <Prize>{prize.total}</Prize>
              </ListItem>
            ))
          )}
        </ListContainer>
      </Content>
    </Container>
  );
};

export default PrizeList;
