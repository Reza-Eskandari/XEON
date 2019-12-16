import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import styled from "styled-components";
import CardFlip from "react-native-card-flip";

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
        <Index>{indez + 1}</Index>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card1]}
            onPress={() => this.card.flip()}
          >
            <Text style={styles.label}>AB</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card2]}
            onPress={() => this.card.flip()}
          >
            <Text style={styles.label}>CD</Text>
          </TouchableOpacity>
        </CardFlip>
        {/* <VideoView>
          <PlayLogo />
        </VideoView>
        <VideoTitle />
        <NotesView>
          <NotesLogo />
        </NotesView>
        <NotesTitle /> */}
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
const Index = styled.Text`
  font-size: ${SCREEN_WIDTH};
  color: black;
  font-weight: 700;
  width: ${SCREEN_WIDTH - 1000};
  height: ${screenHeight};
  position: absolute;
  opacity: 0.1;
  text-align: center;
  justify-content: center;
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

const styles = StyleSheet.create({
  cardContainer: {
    width: 320,
    height: 470,
    alignSelf: "center"
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  card1: {
    backgroundColor: "#FE474C"
  },
  card2: {
    backgroundColor: "#FEB12C"
  },
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});
