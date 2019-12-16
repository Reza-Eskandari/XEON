import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class Menu extends Component {
  render() {
    return (
      <Container>
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
const Content = styled.View``;
