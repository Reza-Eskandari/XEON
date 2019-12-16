import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Chapters = props => {
  return (
    <Container>
      <Animated.View style={transitionAnimation(props.index)}>
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

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Wrapper = styled.View`
  padding-left: 10px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;
