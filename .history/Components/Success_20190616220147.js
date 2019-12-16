import React from "react";
import styled from "lottie-react-native";
import LottieView from "lottie-react-native";

class Success extends React.Component {
  render() {
    return <Container />;
  }
}
export default Success;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
