import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

class ProjectCard extends Component {
  render() {
    return (
      <Container>
        <Cover>
          <Image source={this.props.image} />
          <Title>{this.props.title}</Title>
          <Author>by {this.props.author} </Author>
        </Cover>
        <Text> {this.props.text} </Text>
      </Container>
    );
  }
}
export default ProjectCard;

const Container = styled.View`
  width: 315px;
  height: 460px;
  background-color: blue;
  border-radius: 14px;
`;
const Cover = styled.View`
  height: 290px;
`;
const Image = styled.Image``;
const Title = styled.Text``;
const Author = styled.Text``;
const Text = styled.Text``;
