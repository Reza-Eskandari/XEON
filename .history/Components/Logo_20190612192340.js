import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  height: 60px;
  padding: 42px 16px 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
