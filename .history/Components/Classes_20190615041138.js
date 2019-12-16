import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Class = props => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
        <Logo source={props.logo} />
      </Cover>
    </Container>
  );
};

export default Class;

const Container = styled.View`
  background-color: #191919;
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
  justify-content: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  /* width: 170px; */
`;

const Logo = styled.Image`
  width: 33px;
  height: 33px;
  align-self: center;
  margin-top: 5px;
`;
