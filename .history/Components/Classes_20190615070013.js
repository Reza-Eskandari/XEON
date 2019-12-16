import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

const Class = props => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
      </Cover>
      <LogoHolder>
        <Logo source={props.logo} />
      </LogoHolder>
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.55);
`;

const Cover = styled.View`
  width: 215px;
  height: 100%;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  /* opacity: 0.8; */
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
  /* width: 170px; */
`;

const LogoHolder = styled.View`
  width: 50px;
  height: 50px;
  align-self: center;
  right: 50px;
  top: 50px;
  margin-top: -25px;
  margin-right: -25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.55);
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  align-self: center;
  right: 50px;
  top: 50px;
  margin-top: -25px;
  margin-right: -25px;
`;
