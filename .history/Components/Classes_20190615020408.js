import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Class = ({ props, backgroundColor }) => (
  <Container>
    <Cover style={{ backgroundColor: backgroundColor.color }}>
      <Image source={props.image} />
      <Title>{props.title}</Title>
      <Logo source={props.logo} />
    </Cover>
  </Container>
);

export default Class;

const Container = styled.View`
  background-color: white;
  width: 315px;
  height: 100px;
  border-radius: 14px;
  margin: 0px 20px 20px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.2;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
