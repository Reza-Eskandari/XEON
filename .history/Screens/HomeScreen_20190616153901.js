import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "../Components/Projects-Home";
import { PanResponder, Animated } from "react-native";

function getNextIndex(index) {
  var nextIndex = index + 1;
  if (nextIndex > projects.length - 1) {
    return 0;
  }
  return index + 1;
}

class HomeScreen extends Component {
  static navigationOptions = { header: null };

  state = {
    pan: new Animated.ValueXY(), //NOTE receiving the XYcordinate info of the card from the componentWillMount below
    scale: new Animated.Value(0.9),
    translateY: new Animated.Value(44),
    thirdScale: new Animated.Value(0.8),
    thirdTranslateY: new Animated.Value(-50),
    index: 0
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true, //NOTE Enabaling moving the card in X,Y direction

      onPanResponderGrant: () => {
        Animated.spring(this.state.scale, { toValue: 1 }).start();
        Animated.spring(this.state.translateY, { toValue: 0 }).start();

        Animated.spring(this.state.thirdScale, { toValue: 0.9 }).start();
        Animated.spring(this.state.thirdTranslateY, { toValue: 44 }).start();
      },

      onPanResponderMove: Animated.event([
        //NOTE When moving it change the state of X,Y of the Animated.View
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),

      onPanResponderRelease: () => {
        //NOTE whne fingers realeased the card, change the state's pan info to zero
        const positionY = this.state.pan.y.__getValue();
        if (positionY > 200) {
          Animated.timing(this.state.pan, {
            toValue: { x: 0, y: 1000 }
          }).start(() => {
            this.state.pan.setValue({ x: 0, y: 0 });
            this.state.scale.setValue(0.9);
            this.state.translateY.setValue(44);
            this.state.thirdScale.setValue(0.8);
            this.state.translateY.setValue(-50);
            this.setState({ index: getNextIndex(this.state.index) });
          });
        } else {
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();

          Animated.spring(this.state.scale, { toValue: 0.9 }).start();
          Animated.spring(this.state.translateY, { toValue: 44 }).start();

          Animated.spring(this.state.thirdScale, { toValue: 0.8 }).start();
          Animated.spring(this.state.thirdTranslateY, { toValue: -50 }).start();
        }
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
            title={projects[this.state.index].title}
            image={projects[this.state.index].image}
            author={projects[this.state.index].author}
            text={projects[this.state.index].text}
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
          <ProjectCard
            title={projects[1].title}
            image={projects[1].image}
            author={projects[1].author}
            text={projects[1].text}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -3,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            transform: [
              { scale: this.state.thirdScale },
              { translateY: this.state.thirdTranslateY }
            ]
          }}
        >
          <ProjectCard
            title={projects[2].title}
            image={projects[2].image}
            author={projects[2].author}
            text={projects[2].text}
          />
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
  background: #191919;
`;
const Text = styled.Text``;

const projects = [
  {
    title: "Price Tag",
    image: require("../assets/background5.jpg"),
    author: "Liu Yi",
    text:
      "Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China. Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China."
  },
  {
    title: "The DM App - Ananoumous Chat",
    image: require("../assets/background6.jpg"),
    author: "Chad Goodman",
    text:
      "Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. "
  },
  {
    title: "Nikhiljay",
    image: require("../assets/background7.jpg"),
    author: "Nikhil D'Souza",
    text:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it."
  }
];
