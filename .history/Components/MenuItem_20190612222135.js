import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";

const MenuItem = props => (
  <Container>
    <IconView>
      <Icon.Ionicons name={props.icon} size={24} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Text> {props.text} </Text>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;
const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-content: center;
`;
const Content = styled.View`
  padding-left: 20px;
`;
const Title = styled.Text``;
const Text = styled.Text``;
