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
const TitleView = styled.View`
  height: 200px;
  top: 100px;
  justify-content: center;
  background: grey;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  align-self: center;
`;
