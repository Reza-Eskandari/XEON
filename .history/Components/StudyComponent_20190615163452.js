import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

const StudyComponent = props => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
        <Ionicons name="desk-lamp" size={32} color="black" />
      </Cover>
    </Container>
  );
};

export default StudyComponent;

const Container = styled.View`
  background-color: #191919;
  width: 315px;
  height: 160px;
  border-radius: 14px;
  margin: 0px 20px 20px 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.55);
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.2;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
  letter-spacing: 7px;
  /* width: 170px; */
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  align-self: center;
  right: 50px;
  top: 50px;
  margin-top: -25px;
  margin-right: -25px;
  position: absolute;
`;
