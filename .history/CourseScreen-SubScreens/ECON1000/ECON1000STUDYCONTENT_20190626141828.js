import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class ECON1000STUDYCONTENT extends Component {
  render() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");

    return (
      <Container>
        <ChapterIndex>{content.title}</ChapterIndex>
        <LogoView>
          <Logo />
        </LogoView>
        <LogoTitle />
        <LogoView>
          <Logo />
        </LogoView>
        <LogoTitle />
      </Container>
    );
  }
}
export default ECON1000STUDYCONTENT;

const Container = styled.View`
  flex: 1;
`;

const ChapterIndex = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 40px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
`;

const LogoView = styled.View`
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 40px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
`;

const Logo = styled.Image`
  width: 30px;
  height: 30px;
`;
