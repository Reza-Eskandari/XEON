import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "../Components/Projects-Home";
import { PanResponder, Animated } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = { header: null };

  state = {
    pan: new Animated.ValueXY() //NOTE receiving the XYcordinate info of the card from the componentWillMount below
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true, //NOTE Enabaling moving the card in X,Y direction
      onPanResponderMove: Animated.event([
        //NOTE When moving it change the state of X,Y of the Animated.View

        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),

      onPanResponderRelease: () => {
        //NOTE whne fingers realeased the card, change the state's pan info to zero
        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
      }
    });
  }

  render() {
    return (
      <Container>
        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan.x },
              { translateY: this.state.pan.y }
            ]
          }}
          {...this._panResponder.panHandlers}
        >
          <ProjectCard />
        </Animated.View>
      </Container>
    );
  }
}
export default HomeScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;
