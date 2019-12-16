import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

const Logo = props => (
  <Container>
    <Image source={require("../assets/logo-xd.png")} />
    <Text />
  </Container>
);

export default Logo;

const Container = styled.View``;

const Image = styled.Image``;

const Text = styled.Text``;
