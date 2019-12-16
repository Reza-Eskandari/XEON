import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={require("../assets/background2.jpg")} />
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

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Title = styled.Text``;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
