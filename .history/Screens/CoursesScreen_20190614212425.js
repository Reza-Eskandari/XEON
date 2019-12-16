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
import LinearGradient from "react-native-linear-gradient";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.linearGradient}
          >
            <Title>Courses</Title>
          </LinearGradient>
        </SafeAreaView>
      </Container>
    );
  }
}

export default CoursesScreen;

//NOTE The Base View of the AccountScreen where it holds things like cards, courses, avatar, etc
const Container = styled.View`
  flex: 1;
  background: #191919;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});

const Title = styled.Text`
  top: 50px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  align-self: center;
`;
