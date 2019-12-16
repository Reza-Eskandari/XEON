import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
import LottieView from "lottie-react-native";

const screenHeight = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Chapters = props => {
  return (
    <View style={{ width: SCREEN_WIDTH - 20 }}>
      <TouchableOpacity onPress={props.onPress}>
        <Animated.View
          style={{
            height: "100%",
            borderRadius: 35,
            backgroundColor: "black",
            overflow: "hidden",
            transform: [
              { perspective: 800 },
              {
                scale: xOffset.interpolate({
                  inputRange: [
                    (props.index - 1) * SCREEN_WIDTH,
                    props.index * SCREEN_WIDTH,
                    (props.index + 1) * SCREEN_WIDTH
                  ],
                  outputRange: [0.75, 1, 0.75]
                })
              },
              {
                rotateY: xOffset.interpolate({
                  inputRange: [
                    (props.index - 1) * SCREEN_WIDTH,
                    props.index * SCREEN_WIDTH,
                    (props.index + 1) * SCREEN_WIDTH
                  ],
                  outputRange: ["-30deg", "0deg", "30deg"]
                })
              }
            ]
          }}
        >
          <ChapterCover>
            <AnimatedChapterImage
              source={props.image}
              style={{
                transform: [
                  {
                    scale: xOffset.interpolate({
                      inputRange: [
                        (props.index - 1) * SCREEN_WIDTH,
                        props.index * SCREEN_WIDTH,
                        (props.index + 1) * SCREEN_WIDTH
                      ],
                      outputRange: [1, 1.2, 1]
                    })
                  },
                  {
                    translateX: xOffset.interpolate({
                      inputRange: [
                        (props.index - 1) * SCREEN_WIDTH,
                        props.index * SCREEN_WIDTH,
                        (props.index + 1) * SCREEN_WIDTH
                      ],
                      outputRange: [-50, 0, 50]
                    })
                  }
                ]
              }}
            />
            <ChapterTitle>
              {props.index + 1}-{props.title}
            </ChapterTitle>
            <SubtitleCard style={{ backgroundColor: props.color }}>
              <Subtitle>{props.subtitle}</Subtitle>
              <AnimatedLottieContainer
                style={{
                  transform: [
                    {
                      scale: xOffset.interpolate({
                        inputRange: [
                          (props.index - 1) * SCREEN_WIDTH,
                          props.index * SCREEN_WIDTH,
                          (props.index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: [1, 1.2, 1]
                      })
                    },
                    {
                      translateX: xOffset.interpolate({
                        inputRange: [
                          (props.index - 1) * SCREEN_WIDTH,
                          props.index * SCREEN_WIDTH,
                          (props.index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: [-50, 0, 50]
                      })
                    }
                  ]
                }}
              >
                <LottieView source={props.lottie} autoPlay loop />
              </AnimatedLottieContainer>
            </SubtitleCard>
          </ChapterCover>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

class ECON1000_STUDY extends Component {
  static navigationOptions = { header: null };

  state = {
    //NOTE setting the height of Menu to below - like moving from below to up
    top: new Animated.Value(screenHeight),
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460),
    // titleTop: new Animated.Value(20),
    opacity: new Animated.Value(0)
    // textHeight: new Animated.Value(100)
  };

  componentDidMount() {
    Animated.spring(this.state.top, { toValue: 70, bounciness: 12 }).start();
  }
  componentWillUnmount() {
    StatusBar.setBarStyle("light-content", true);
  }

  openCard = () => {
    Animated.spring(this.state.cardWidth, { toValue: SCREEN_WIDTH }).start();
    Animated.spring(this.state.cardHeight, {
      toValue: screenHeight
    }).start();
    // Animated.spring(this.state.titleTop, { toValue: 40 }).start();
    // Animated.spring(this.state.opacity, { toValue: 1 }).start();
    // Animated.spring(this.state.textHeight, { toValue: 1000 }).start();

    this.props.openCard();
  };

  render() {
    const { navigation } = this.props;
    const study = navigation.getParam("study");

    return (
      <Container>
        <StatusBar hidden />
        <Title>{study.title}</Title>
        <AnimatedCover
          style={{ top: this.state.top, backgroundColor: study.maincolor }}
        >
          <Image source={study.image} />
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            horizontal
            style={{
              flexDirection: "row",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0
            }}
          >
            {study.chapters.map((chapter, index) => (
              <Chapters
                key={index}
                title={chapter.title}
                index={index}
                image={chapter.image}
                color={chapter.color}
                subtitle={chapter.subtitle}
                lottie={chapter.lottie}
                onPress={() => {
                  this.props.navigation.push("ECON1000STUDYCONTENT", {
                    content: chapter,
                    indez: index,
                    study: study
                  });
                }}
              />
            ))}
          </Animated.ScrollView>
        </AnimatedCover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 20, right: 30 }}
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
  /* background: #191919; */
`;

const Cover = styled.View`
  width: 100%;
  height: 90%;
  bottom: 0px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  /* background: #ffdd00; */
  overflow: hidden;
  position: absolute;
`;
const AnimatedCover = Animated.createAnimatedComponent(Cover);

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 32px;
  color: black;
  font-weight: bold;
  position: absolute;
  /* align-self: center; */
  top: 25px;
  left: 30px;
  /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
  /* letter-spacing: 10px; */
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

const ChapterCover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 35px;
  overflow: hidden;
`;
const ChapterImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const AnimatedChapterImage = Animated.createAnimatedComponent(ChapterImage);

const ChapterTitle = styled.Text`
  color: white;
  font-size: 40%;
  font-weight: bold;
  width: 270px;
  margin-top: 35px;
  margin-left: 30px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
`;

const SubtitleCard = styled.View`
  width: 305px;
  height: 320px;
  border-radius: 40px;
  overflow: hidden;
  /* background-color: ${props => props.color}; */
  align-self: center;
  position: absolute;
  margin-left: 15px;
  margin-right: 15px;
  bottom: 15px;
  opacity: 0.9;
`;

const Subtitle = styled.Text`
  font-size: 17px;
  font-weight: 500;
  margin: 20px;
  line-height: 24px;
  color: white;
`;

const LottieContainer = styled.View`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0);
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10;

  align-self: center;
`;

const AnimatedLottieContainer = Animated.createAnimatedComponent(
  LottieContainer
);
