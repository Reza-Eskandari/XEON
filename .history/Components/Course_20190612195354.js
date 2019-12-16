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
      <Name> {props.name} </Name>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View``;
const Cover = styled.View``;
const Image = styled.Image``;
const Logo = styled.Image``;
const Subtitle = styled.Text``;
const Title = styled.Text``;
const Content = styled.View``;
const Avatar = styled.Image``;
const Caption = styled.Text``;
const Name = styled.Text``;
