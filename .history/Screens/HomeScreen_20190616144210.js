import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "../Components/Projects-Home";
import { PanResponder, Animated } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = { header: null };

  state = {
    pan: new Animated.ValueXY(), //NOTE receiving the XYcordinate info of the card from the componentWillMount below
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44)
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onPanResponderGrant: () => {
        Animated.spring(this.state.scale, { toValue: 1 }).start();
        Animated.spring(this.state.translateY, { toValue: 0 }).start();
      },
      onMoveShouldSetPanResponder: () => true, //NOTE Enabaling moving the card in X,Y direction
      onPanResponderMove: Animated.event([
        //NOTE When moving it change the state of X,Y of the Animated.View
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),

      onPanResponderRelease: () => {
        //NOTE whne fingers realeased the card, change the state's pan info to zero
        Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();

        Animated.spring(this.state.scale, { toValue: 0.9 }).start();
        Animated.spring(this.state.translateY, { toValue: 44 }).start();
      }
    });
  }

  render() {
    return (
      <Container>
        <Animated.View
          style={{
            //NOTE change the XY cordinate by listening to the state's pan info and based on that change the direction of the view
            transform: [
              { translateX: this.state.pan.x },
              { translateY: this.state.pan.y }
            ]
          }}
          {...this._panResponder.panHandlers} //NOTE take every thing inside the componentWillMount
        >
          <ProjectCard
            title="Prie Tag"
            image={require("../assets/background14.jpg")}
            author="Meng"
            text="REZ is the best app ever!REZ is the best app ever! REZ is the best app ever!REZ is the best app ever!"
          />
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { scale: this.state.scale },
              { translateY: this.state.translateY }
            ]
          }}
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
