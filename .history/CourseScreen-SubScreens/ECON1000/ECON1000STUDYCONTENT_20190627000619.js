// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import styled from "styled-components";

// class ECON1000STUDYCONTENT extends Component {
//   static navigationOptions = { header: null };

//   render() {
//     const { navigation } = this.props;
//     const content = navigation.getParam("content");
//     const study = navigation.getParam("study");
//     const indez = navigation.getParam("indez");
//     return (
//       <Container>
//         <Title>{study.title}</Title>
//         <ChapterIndex>{indez + 1}</ChapterIndex>
//         <VideoView>
//           <PlayLogo />
//         </VideoView>
//         <VideoTitle />
//         <NotesView>
//           <NotesLogo />
//         </NotesView>
//         <NotesTitle />
//       </Container>
//     );
//   }
// }
// export default ECON1000STUDYCONTENT;

// const Container = styled.View`
//   flex: 1;
//   background: #ffdd00;
// `;

// const Title = styled.Text`
//   font-size: 12px;
//   color: black;
//   font-weight: bold;
//   /* position: absolute; */
//   align-self: center;
//   top: 25px;
//   /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
//   letter-spacing: 10px;
// `;

// const ChapterIndex = styled.Text`
//   font-size: 60px;
//   color: black;
//   font-weight: 700;
//   /* position: absolute; */
//   top: 0px;
//   left: 0px;
//   opacity: 0.1;
//   /* text-shadow: 0px 15px 10px rgba(0, 0, 0, 0.35); */
// `;

// const VideoView = styled.View`
//   height: 150px;
//   width: 150px;
//   background: orange;
//   border-radius: 75px;
//   box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
//   justify-content: center;
//   align-items: center;
//   align-self: center;
// `;

// const VideoTitle = styled.Text`
//   font-size: 24px;
//   color: white;
//   font-weight: bold;
//   position: absolute;
//   align-self: center;
//   top: 40px;
//   text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
// `;

// const PlayLogo = styled.Image`
//   width: 30px;
//   height: 30px;
// `;
// const NotesView = styled.View`
//   height: 150px;
//   width: 150px;
//   background: orange;
//   border-radius: 75px;
//   box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
//   justify-content: center;
//   align-items: center;
//   align-self: center;
// `;

// const NotesTitle = styled.Text`
//   font-size: 24px;
//   color: white;
//   font-weight: bold;
//   position: absolute;
//   align-self: center;
//   top: 40px;
//   text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
// `;

// const NotesLogo = styled.Image`
//   width: 30px;
//   height: 30px;
// `;

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";

export default class animatedbasic extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }
  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text style={styles.flipText}>
              This text is flipping on the front.
            </Text>
          </Animated.View>
          <Animated.View
            style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}
          >
            <Text style={styles.flipText}>
              This text is flipping on the back.
            </Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text>Flip!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flipCard: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    backfaceVisibility: "hidden"
  },
  flipCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

AppRegistry.registerComponent("animatedbasic", () => animatedbasic);
