import React, { Component } from "react";
import { Animated } from "react-native";
import styled from "styled-components";

class Menu extends Component {
  state = {
    top: 500
  };

  render() {
    return (
      <Container style={{ top: this.state.top }}>
        <Cover />
      </Container>
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
const Cover = styled.View`
  height: 142px;
  background: black;
`;
const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;
