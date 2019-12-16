import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <TitleView>
            <Title>Courses</Title>
          </TitleView>
          <LinearGradient
            color={["#61045f", "#20011f"]}
            style={{ width: 100, height: 100 }}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default CoursesScreen;

//NOTE The Base View of the AccountScreen where it holds things like cards, courses, avatar, etc
const Container = styled.View`
  flex: 1;
  /* background: #191919; */
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const TitleView = styled.View`
  height: 200px;
  justify-content: center;
  background: linear-gradient(blue, pink);
`;

const Title = styled.Text`
  top: 50px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  align-self: center;
`;
