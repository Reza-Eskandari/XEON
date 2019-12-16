import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={require("./assets/avatar.jpg")} />
      <Title>Styled Components</Title>
    </Cover>
  </Container>
);

export default Card;

const Container = styled.View`
  background-color: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View``;

const Avatar = styled.Image``;

const Title = styled.Text``;

const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  background: black;
  border-radius: 23;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
