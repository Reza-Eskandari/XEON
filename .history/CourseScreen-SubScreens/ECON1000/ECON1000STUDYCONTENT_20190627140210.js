import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styled from "styled-components";

const SCREEN_WIDTH = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

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
        <ChapterIndex>
          <Index>{indez + 1}</Index>
        </ChapterIndex>
        <VideoView>
          <PlayLogo />
        </VideoView>
        <VideoTitle />
        <NotesView>
          <NotesLogo />
        </NotesView>
        <NotesTitle />
      </Container>
    );
  }
}
export default ECON1000STUDYCONTENT;

const Container = styled.View`
  flex: 1;
  background: #ffdd00;
`;

const Title = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: bold;
  /* position: absolute; */
  /* align-self: center; */
  top: 25px;
  left: 30px;
  /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
  /* letter-spacing: 10px; */
`;

const ChapterIndex = styled.View`
  width: ${SCREEN_WIDTH + 200};
  height: ${screenHeight};
  position: absolute;
`;
const Index = styled.Text`
  font-size: 699;
  color: black;
  font-weight: 700;
  width: ${SCREEN_WIDTH};
  /* position: absolute; */
  top: 0px;
  left: 0px;
  opacity: 0.1;
  /* text-shadow: 0px 15px 10px rgba(0, 0, 0, 0.35); */
`;

const VideoView = styled.View`
  height: 150px;
  width: 150px;
  background: orange;
  border-radius: 75px;
  box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const VideoTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 40px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
`;

const PlayLogo = styled.Image`
  width: 30px;
  height: 30px;
`;
const NotesView = styled.View`
  height: 150px;
  width: 150px;
  background: orange;
  border-radius: 75px;
  box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const NotesTitle = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 40px;
  text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
`;

const NotesLogo = styled.Image`
  width: 30px;
  height: 30px;
`;
