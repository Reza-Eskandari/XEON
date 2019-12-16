import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import SelectedClasses from "../CourseScreen-SubScreens/SelectedClasses";

class ECON1000_GROUPCHAT extends Component {
  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const gp = navigation.getParam("gp"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads

    return (
      <Container>
        <Cover>
          <Image source={gp.image} />
          <Logo source={gp.logo} />
          <Title>{gp.title}</Title>
        </Cover>
      </Container>
    );
  }
}
export default ECON1000_GROUPCHAT;

const Container = styled.View``;

const Cover = styled.View``;

const Image = styled.Image`
  opacity: 0.3;
`;

const Title = styled.Text``;

const Logo = styled.Image``;
