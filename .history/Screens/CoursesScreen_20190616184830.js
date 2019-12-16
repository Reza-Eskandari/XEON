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
import { LinearGradient } from "expo";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <LinearGradient
            colors={["rgba(255,255,255, 1)", "rgba(255,255,255, 0)"]}
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: 150
            }}
          />
          <Title>Courses</Title>

          <ScrollView
            style={{ zIndex: -1 }}
            showsVerticalScrollIndicator={false}
          >
            {classes.map((clazz, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Selected", { selected: clazz });
                }}
              >
                <Class
                  title={clazz.title}
                  image={clazz.image}
                  logo={clazz.logo}
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
  margin-top: 30px;
  padding-bottom: 20px;
  position: absolute;
`;

const classes = [
  {
    title: "ECON 1000",
    image: require("../assets/ECON1000-THUMBNAIL.jpg"),
    logo: require("../assets/ECON1000-ICON.png")
  },
  {
    title: "EECS 1012",
    image: require("../assets/EECS1012-THUMBNAIL.jpg"),
    logo: require("../assets/EECS1012-ICON.png")
  },
  {
    title: "EECS 1022",
    image: require("../assets/EECS1022-THUMBNAIL.jpg"),
    logo: require("../assets/EECS1022-ICON.png")
  },
  {
    title: "MATH 1019",
    image: require("../assets/MATH1090-THUMBNAIL.jpg"),
    logo: require("../assets/MATH1090-ICON.png")
  },
  {
    title: "ADMS 1000",
    image: require("../assets/ADMS1000-THUMBNAIL.jpg"),
    logo: require("../assets/ADMS1000-ICON.png")
  }
];
