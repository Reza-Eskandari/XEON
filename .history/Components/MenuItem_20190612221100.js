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

const Container = styled.View``;
const IconView = styled.View``;
const Content = styled.View``;
const Title = styled.Text``;
const Text = styled.Text``;
