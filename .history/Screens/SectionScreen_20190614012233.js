import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

class SectionScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>SectionScreen</Text>
      </Container>
    );
  }
}
export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;
const Text = styled.Text``;
