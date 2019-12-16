import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Chapters = props => {
  return (
    <Container>
      <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
        <Cover>
          <Image source={props.image} />
          <Title>{props.title}</Title>
        </Cover>
        <Content>
          <Logo source={props.logo} />
          <Wrapper>
            <Caption>{props.caption}</Caption>
            <SubTitle>{props.subtitle}</SubTitle>
          </Wrapper>
        </Content>
      </Animated.View>
    </Container>
  );
};

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 1000 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["45deg", "0deg", "45deg"]
        })
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};
export default componentName;

const styles = StyleSheet.create({
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20
  },
  screen: {
    height: 550,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  }
});
