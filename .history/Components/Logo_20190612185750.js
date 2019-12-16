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
  width: 150px;
  height: 80px;
  margin-left: 20px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 14px;
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
