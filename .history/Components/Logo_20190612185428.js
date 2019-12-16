import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={props.image} />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View``;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text``;
