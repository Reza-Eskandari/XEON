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

const Container = styled.View``;
const Cover = styled.View``;
const Content = styled.View``;
