import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Chapters = props => {
  return (
    <View style={{ width: SCREEN_WIDTH, padding: 20 }}>
      <Animated.View
        style={{
          height: 550,
          borderRadius: 35,
          backgroundColor: "purple",
          overflow: "hidden",
          padding: 35,
          paddingTop: 35,
          transform: [
            { perspective: 800 },
            {
              scale: xOffset.interpolate({
                inputRange: [
                  (props.index - 1) * SCREEN_WIDTH,
                  props.index * SCREEN_WIDTH,
                  (props.index + 1) * SCREEN_WIDTH
                ],
                outputRange: [0.25, 1, 0.25]
              })
            },
            {
              rotateY: xOffset.interpolate({
                inputRange: [
                  (props.index - 1) * SCREEN_WIDTH,
                  props.index * SCREEN_WIDTH,
                  (props.index + 1) * SCREEN_WIDTH
                ],
                outputRange: ["-45deg", "0deg", "45deg"]
              })
            }
          ]
        }}
      >
        <ChapterImage source={props.image} />
        <ChapterTitle>
          {props.index + 1} -{props.title}
        </ChapterTitle>
      </Animated.View>
    </View>
  );
};

class ECON1000_STUDY extends Component {
  static navigationOptions = { header: null };

  render() {
    const { navigation } = this.props;
    const study = navigation.getParam("study");

    return (
      <Container>
        <Title>{study.title}</Title>
        <Cover>
          <Image source={study.image} />
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            horizontal
            style={{ flexDirection: "row" }}
          >
            {study.chapters.map((chapter, index) => (
              <TouchableOpacity key={index}>
                <Chapters title={chapter.title} index={index} />
              </TouchableOpacity>
            ))}
          </Animated.ScrollView>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 15, left: 15 }}
        >
          <CloseView>
            <Icon.Ionicons
              name="ios-arrow-back"
              size={20}
              color="black"
              style={{ marginTop: 2 }}
            />
          </CloseView>
        </TouchableOpacity>
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
  height: 90%;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* background: #ffdd00; */
  overflow: hidden;
  position: absolute;
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
  top: 25px;
  /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
  letter-spacing: 10px;
`;

const CloseView = styled.View`
  height: 32px;
  width: 32px;
  background: #ffdd00;
  border-radius: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0 0.05);
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
`;

const ChapterImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ChapterTitle = styled.Text`
  color: black;
  font-size: 45px;
  font-weight: bold;
  width: 270px;
`;
