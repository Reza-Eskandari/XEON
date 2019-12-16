import React, { Component } from "react";
import {TouchableOpacity} from "react-native";
import styled from "styled-components";
import { NotificationIcon } from "../Components/Icons";
import {Icon} from 'expo'

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
        <TouchableOpacity onPress={} style={{position: "absolute", top: 20, right: 20}}>
        <CloseView>
          <Icon.Ionicons name="ios-close" size={36} color="#4775f2" />
        </CloseView>
        </TouchableOpacity>
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
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  width: 170px;
  top: 78px;
  left: 28px;
`;
const Caption = styled.Text`
  font-size: 17px;
  color: white;
  position: absolute;
  width: 300px;
  bottom: 20px;
  left: 20px;
`;

const CloseView = styled.View`
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0,0,0 0.15);
  justify-content: center;
  align-items: center
`;
