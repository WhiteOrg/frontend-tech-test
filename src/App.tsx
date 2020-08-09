import React from "react";
import Tournament from "./components/templates/tournament";
import { Data } from "./components/types";

type State = {
  error?: string;
  isLoaded: boolean;
  data?: Data;
};

const titles = {
  titlePrizeList: "Prize List",
  titleGamesList: "Include Games",
  titleTermsCondition: "Terms & Conditions",
};

class App extends React.Component<{}, State> {
  state = {
    error: undefined,
    isLoaded: false,
    data: undefined,
  };

  getData() {
    fetch("https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda")
      .then((res) => res.json())
      .then(
        (result) => {
          // To activate the counter
          result.startDate = "2020-08-13T10:06:29.578Z";
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.isLoaded && this.state.data && (
          <Tournament
            {...this.state.data}
            {...titles}
            rotate={this.state.isLoaded ? 0 : 1}
            onClick={this.getData.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default App;
