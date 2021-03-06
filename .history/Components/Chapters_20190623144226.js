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

// const SCREEN_WIDTH = Dimensions.get("window").width;

// const xOffset = new Animated.Value(0);

const Chapters = props => {
  return (
    <Container>
      {/* <Animated.View style={transitionAnimation(props.index)}> */}
      <Title>{props.title}</Title>
      {/* </Animated.View> */}
    </Container>
  );
};

// const transitionAnimation = index => {
//   return {
//     transform: [
//       { perspective: 1000 },
//       {
//         scale: xOffset.interpolate({
//           inputRange: [
//             (index - 1) * SCREEN_WIDTH,
//             index * SCREEN_WIDTH,
//             (index + 1) * SCREEN_WIDTH
//           ],
//           outputRange: [0.25, 1, 0.25]
//         })
//       },
//       {
//         rotateY: xOffset.interpolate({
//           inputRange: [
//             (index - 1) * SCREEN_WIDTH,
//             index * SCREEN_WIDTH,
//             (index + 1) * SCREEN_WIDTH
//           ],
//           outputRange: ["-45deg", "0deg", "45deg"]
//         })
//       }
//     ]
//   };
// };
// export default Chapters;

const Container = styled.View`
  background-color: white;
  width: 315px;
  height: 550px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Title = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
