import React, { Component } from "react";
import { Button } from "react-native";
import styled from "styled-components";

class CoursesScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Container>
        <Text>CoursesScreen</Text>
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
export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
