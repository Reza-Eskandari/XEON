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

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Chapters = props => {
  return (
    <View
      style={{ width: SCREEN_WIDTH, padding: 20, justifyContent: "center" }}
    >
      <Animated.View
        style={{
          height: 550,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
          backgroundColor: "white",
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
        <ChapterTitle>{props.title}</ChapterTitle>
      </Animated.View>
    </View>
  );
};
export default Chapters;

const ChapterImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ChapterTitle = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
