// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import styled from "styled-components";

// class ECON1000_GROUPCHAT extends Component {
//   static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

//   render() {
//     const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
//     const gp = navigation.getParam("gp"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads

//     return (
//       <Container>
//         <Cover>
//           <Image source={gp.image} />
//           <Logo source={gp.logo} />
//           <Title>{gp.title}</Title>
//         </Cover>
//       </Container>
//     );
//   }
// }
// export default ECON1000_GROUPCHAT;

// const Container = styled.View``;

// const Cover = styled.View``;

// const Image = styled.Image`
//   opacity: 0.3;
// `;

// const Title = styled.Text``;

// const Logo = styled.Image``;

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";
import Chapters from "../../Components/Chapters";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
  return (
    <View style={styles.scrollPage}>
      <Animated.View style={[styles.screen, transitionAnimation(props.index)]}>
        <Text style={styles.text}>{props.text}</Text>
      </Animated.View>
    </View>
  );
};

const transitionAnimation = index => {
  return {
    transform: [
      { perspective: 800 },
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

export default class App extends Component {
  static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

  state = {
    scale: new Animated.Value(1)
  };

  render() {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        style={styles.scrollView}
      >
        {study.chapters.map((chapter, index) => (
          <TouchableOpacity key={index}>
            <Chapters title={chapter.title} />
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    backgroundColor: "#00d4ff"
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20
  },
  screen: {
    height: 600,
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
