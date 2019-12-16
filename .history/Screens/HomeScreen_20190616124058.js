import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "../Components/Projects-Home";

class HomeScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Container>
        <ProjectCard />
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
