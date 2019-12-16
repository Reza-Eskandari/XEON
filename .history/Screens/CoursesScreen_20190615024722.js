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
import Class from "../Components/Classes";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <Title>Courses</Title>

          <ScrollView>
            {classes.map((classes, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Section", { section: calsses });
                }}
              >
                <Class
                  title={classes.title}
                  image={classes.image}
                  logo={classes.logo}
                  caption={classes.caption}
                  subtitle={classes.subtitle}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  align-self: center;
  margin-top: 100px;
  padding-bottom: 20px;
`;

const classes = [
  {
    title: "ECON 1000",
    image: require("../assets/background16.jpg"),
    logo: require("../assets/logo-react.png"),
    rang= "red"
  },
  {
    title: "Style Components2",
    image: require("../assets/background3.jpg"),
    logo: require("../assets/logo-framerx.png"),
    caption: "FramerX",
    subtitle: "2 of 12 sessions"
  },
  {
    title: "Style Components",
    image: require("../assets/background5.jpg"),
    logo: require("../assets/logo-studio.png"),
    caption: "Studio",
    subtitle: "3 of 12 sessions"
  },
  {
    title: "Style Components",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-vue.png"),
    caption: "Vue",
    subtitle: "4 of 12 sessions"
  },
  {
    title: "Style Components",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-vue.png"),
    caption: "Vue",
    subtitle: "4 of 12 sessions"
  }
];
