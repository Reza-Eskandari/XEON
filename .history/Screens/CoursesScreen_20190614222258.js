import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar,
  MaskedViewIOS
} from "react-native";
import styled from "styled-components";
import { Constants, LinearGradient } from "expo";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <MaskedViewIOS
            style={{ flex: 1 }}
            maskElement={
              <LinearGradient colors={["black", "red"]} style={{ flex: 1 }} />
            }
          >
            <TitleView>
              <Title>Courses</Title>
            </TitleView>
          </MaskedViewIOS>
        </SafeAreaView>
      </Container>
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
  opaci
`;

const Title = styled.Text`
  top: 50px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  align-self: center;
`;
