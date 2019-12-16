import React, { Component } from "react";
import { Button } from "react-native";
import styled from "styled-components";

class HomeScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Container>
        <Text>HomeScreen</Text>
        <Button
          title="Close"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </Container>
    );
  }
}
export default HomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
