import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import SelectedClasses from "./SelectedClasses";

class StudyScreen extends Component {
  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const selected = navigation.getParam("selected"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads

    return (
      <Container>
        {/* <Cover>
          <Image source={selected.image} />
          <Logo source={selected.logo} />
          <Title>{selected.title}</Title>
        </Cover> */}
      </Container>
    );
  }
}
export default StudyScreen;

const Container = styled.View``;

const Cover = styled.View``;

const Image = styled.Image``;

const Title = styled.Text``;

const Logo = styled.Image``;
