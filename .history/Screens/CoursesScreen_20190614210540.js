import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import styled from "styled-components";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/background7.jpg")} />
        <SafeAreaView>
          <TitleView>
            <Title>Courses</Title>
          </TitleView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default CoursesScreen;

//NOTE The Base View of the AccountScreen where it holds things like cards, courses, avatar, etc
const Container = styled.View`
  flex: 1;
  background: white;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.2;
  position: absolute;
`;

const TitleView = styled.View`
  height: 200px;
  justify-content: center;
  background: grey;
`;

const Title = styled.Text`
  top: 70px;
  font-size: 50px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  align-self: center;
`;
