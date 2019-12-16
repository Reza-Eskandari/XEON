import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet
} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
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

class ECON1000_STUDY extends Component {
  static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const study = navigation.getParam("study"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads

    return (
      <Container>
        <Title>{study.title}</Title>
        <Cover>
          <Image source={study.image} />
          {/* <Logo source={study.logo} /> */}
          {/* <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            pagingEnabled
            horizontal
            style={{
              flexDirection: "row"
            }}
          >
            {study.chapters.map((chapter, index) => (
              <TouchableOpacity key={index}>
                <Chapters title={chapter.title} />
              </TouchableOpacity>
            ))}
            {/* <Screen text="Screen 2" index={1} />
            <Screen text="Screen 3" index={2} />
            <Screen text="Screen 3" index={3} /> */}
          {/* </Animated.ScrollView> */} */}
          <Animated.ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: xOffset } } }],
              { useNativeDriver: true }
            )}
            horizontal
            pagingEnabled
            style={styles.scrollView}
          >
            <Screen text="Screen 1" index={0} />
            <Screen text="Screen 2" index={1} />
            <Screen text="Screen 3" index={2} />
          </Animated.ScrollView>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 15, left: 15 }}
        >
          {/*NOTE the white circular view behind the close icon */}
          <CloseView>
            {/*NOTE The close icon */}
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
`;

const Cover = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* background: #ffdd00; */
  overflow: hidden;
  position: absolute;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 12px;
  color: black;
  font-weight: bold;
  position: absolute;
  align-self: center;
  top: 25px;
  /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
  letter-spacing: 10px;
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

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row"
  }
});

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
