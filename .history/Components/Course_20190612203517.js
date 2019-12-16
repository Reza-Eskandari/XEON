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
      <Author> Taught by {props.author} </Author>
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
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 250px;
`;
const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
const Caption = styled.Text``;
const Author = styled.Text``;
