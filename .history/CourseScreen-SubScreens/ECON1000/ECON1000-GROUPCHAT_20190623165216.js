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
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);

const Screen = props => {
  return (
    <View
      style={{ width: SCREEN_WIDTH, padding: 20, justifyContent: "center" }}
    >
      <Animated.View
        style={{
          height: 600,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
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
        <Text style={{ fontSize: 45, fontWeight: "bold" }}>{props.text}</Text>
      </Animated.View>
    </View>
  );
};

export default class App extends Component {
  static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

  render() {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        style={{ flexDirection: "row", backgroundColor: "#00d4ff" }}
      >
        <Screen text="Screen 1" index={0} />
        <Screen text="Screen 2" index={1} />
        <Screen text="Screen 3" index={2} />
        <Screen text="Screen 3" index={3} />
        <Screen text="Screen 3" index={4} />
        <Screen text="Screen 3" index={5} />
        <Screen text="Screen 3" index={6} />
      </Animated.ScrollView>
    );
  }
}
