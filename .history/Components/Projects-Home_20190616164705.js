import React, { Component } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const taBarHeight = 43;

class ProjectCard extends Component {
  state = {
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460),
    titleTop: new Animated.Value(20)
  };

  openCard = () => {
    Animated.spring(this.state.cardWidth, { toValue: screenWidth }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: screenHeight - taBarHeight
    }).start();
    Animated.spring(this.state.titleTop, { toValue: 40 }).start();

    StatusBar.setHidden(true);
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer
          style={{ width: this.state.cardWidth, height: this.state.cardHeight }}
        >
          <Cover>
            <Image source={this.props.image} />
            <AnimatedTitle style={{ top: this.state.titleTop }}>
              {this.props.title}
            </AnimatedTitle>
            <Author>by {this.props.author} </Author>
          </Cover>
          <Text> {this.props.text} </Text>
          <CloseView>
            <Icon.Ionicons name="ios-close" size={32} color="black" />
          </CloseView>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    );
  }
}
export default ProjectCard;

const Container = styled.View`
  width: 315px;
  height: 460px;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;
const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;
const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const CloseView = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
  justify-content: center;
  align-items: center;
`;
