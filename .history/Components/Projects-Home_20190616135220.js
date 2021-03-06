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
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;
const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;
const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;
