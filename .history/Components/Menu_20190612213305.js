import React, { Component } from "react";
import { Animated, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
class Menu extends Component {
  state = {
    top: new Animated.Value(900)
  };

  componentDidMount() {
    Animated.spring(this.state.top, { toValue: 0 }).start();
  }

  closeMenu = () => {
    Animated.spring(this.state.top, { toValue: 900 }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover />
        <TouchableOpacity onPress={this.closeMenu}>
          <CloseView>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
      </AnimatedContainer>
    );
  }
}
export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
`;
const CloseView = styled.View`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  background: white;
`;
const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;
