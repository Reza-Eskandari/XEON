import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class ProjectCard extends Component {
  render() {
    return <Container />;
  }
}
export default ProjectCard;

const Container = styled.View`
  width: 315px;
  height: 460px;
  background-color: blue;
  border-radius: 14px;
`;
