import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} />
      <Subtitle> {props.subtitle} </Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption> {props.caption} </Caption>
      <Author> {props.Author} </Author>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  width: 335px;
  height: 335px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  height: 260px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Logo = styled.Image`
  width: 48px;
  height: 48px;
`;
const Subtitle = styled.Text``;
const Title = styled.Text``;
const Content = styled.View``;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
`;
const Caption = styled.Text``;
const Author = styled.Text``;
