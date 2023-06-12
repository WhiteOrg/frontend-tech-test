import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { getData } from "../../fetchData";
import { TPrizeList } from "../../utils/dataTypes";
import refresh from "../../images/refresh.svg";
import "./prizeList.scss";

const PrizeList = (props: { list: TPrizeList }) => {
  const { list } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState(list);

  const refreshList = () => {
    setIsLoading(true);
    getData()
      .then((response) => response.json())
      .then((data) => {
        setListData(data.prizeList);
        setIsLoading(false);
      })
      .catch((error) => console.log("ERROR: ", error));
  };

  return (
    <div className="prizeList">
      <div className="prizeList__heading" data-testid="prize-heading">
        <h2>Prize List</h2>
        <button
          className="prizeList__heading--refresh"
          data-testid="refresh-button"
          onClick={refreshList}
        >
          <img src={refresh} alt="refresh icon" />
        </button>
      </div>

      <div className="prizeList__table">
        {isLoading ? (
          <div className="prizeList__table--loading">
            <LoadingSpinner />
          </div>
        ) : (
          <table data-testid="table-elem">
            <tbody>
              {listData.map((prize, index) => (
                <tr key={index} data-testid="table-row">
                  <td className="prizeList__table--index">{index + 1}</td>
                  <td className="prizeList__table--title">{prize.title}</td>
                  <td className="prizeList__table--total">{prize.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PrizeList;
