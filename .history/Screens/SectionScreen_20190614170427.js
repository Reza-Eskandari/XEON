import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";

class SectionScreen extends Component {
  static navigationOptions = { header: null };

  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const section = navigation.getParam("section"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads
    return (
      <Container>
        <Cover>
          <Image source={section.image} />
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
      </Container>
    );
  }
}
export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;
const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Title = styled.Text``;
const Caption = styled.Text``;
