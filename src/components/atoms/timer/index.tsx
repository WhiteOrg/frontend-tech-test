import React from "react";
import styled from "styled-components";

const Flipper = styled.div`
  width: 22px;
  height: 3px;
  border-radius: 1.5px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 14px;
  top: 24px;
`;

const Rectangle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: solid 2px #ffffff;
`;

const Text = styled.p`
  line-height: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: -22px;
`;

class Timer extends React.Component {
  render() {
    return (
      <Rectangle>
        <Flipper />
        <Text>{this.props.children}</Text>
      </Rectangle>
    );
  }
}

export default Timer;
