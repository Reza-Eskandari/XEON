import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class StudyScreen extends Component {
  render() {
    return (
      <Container>
        <Cover>
          <Image source={selectedcomponent.image} />
          <Logo source={selectedcomponent.logo} />
          <Title>{selectedcomponent.title}</Title>
        </Cover>
      </Container>
    );
  }
}
export default StudyScreen;

const Container = styled.View``;

const Cover = styled.View``;

const Image = styled.Image``;

const Title = styled.Text``;

const Logo = styled.Image``;
