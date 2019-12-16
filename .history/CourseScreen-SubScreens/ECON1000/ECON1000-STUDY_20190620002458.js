import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class ECON1000_STUDY extends Component {
  static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const study = navigation.getParam("study"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads

    return (
      <Container>
        <Title>{study.title}</Title>
        <Cover>
          <Image source={study.image} />
          {/* <Logo source={study.logo} /> */}
        </Cover>
      </Container>
    );
  }
}
export default ECON1000_STUDY;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* background: #ffdd00; */
  overflow: hidden;
  box-shadow: 0px -20px 15px rgba(0, 0, 0, 0.55);
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 20px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
  letter-spacing: 10px;
`;

const Logo = styled.Image``;
