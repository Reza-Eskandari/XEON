import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

class SectionScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Container>
        <Text>SectionScreen</Text>
      </Container>
    );
  }
}
export default SectionScreen;

const Container = styled.View`
  flex: 1;
  top: 100px;
`;
const Text = styled.Text``;
