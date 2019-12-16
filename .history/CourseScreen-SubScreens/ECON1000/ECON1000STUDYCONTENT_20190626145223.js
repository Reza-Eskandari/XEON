import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class ECON1000STUDYCONTENT extends Component {
  static navigationOptions = { header: null };

  render() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    const study = navigation.getParam("study");
    const indez = navigation.getParam("indez");
    return (
      <Container>
        <Title>{study.title}</Title>
        <ChapterIndex>{indez + 1}</ChapterIndex>
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

const Title = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 25px;
  /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
  letter-spacing: 10px;
`;

const ChapterIndex = styled.Text`
  font-size: 660px;
  color: black;
  font-weight: bold;
  position: absolute;
  align-self: center;
  left: 20px;
  opacity: 0.3;
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
