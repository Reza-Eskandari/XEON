import React from "react";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";

class Success extends React.Component {
  state = {
    top: new Animated.Value(0),
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    this.animation.play;
  }

  render() {
    return (
      <AnimatedContainer>
        <LottieView
          source={require("../assets/lottie-checked-done.json")}
          autoPlay={false}
          loop={false}
          ref={animation => (this.animation = animation)}
        />
      </AnimatedContainer>
    );
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
const AnimatedContainer = Animated.createAnimatedComponent(Container);
