import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={require("../assets/background2.jpg")} />
      <Title>Styled Components</Title>
    </Cover>
    <Content>
      <Logo source={require("../assets/logo-react.png")} />
      <Wrapper>
        <Caption>React Native</Caption>
        <SubTitle>5 of 12 sections</SubTitle>
      </Wrapper>
    </Content>
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

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
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
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.View`
  padding-left: 20px;
`;
const Caption = styled.Text``;
const SubTitle = styled.Text``;
