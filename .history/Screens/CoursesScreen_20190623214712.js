import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions
} from "react-native";
import styled from "styled-components";
import Class from "../Components/Classes";
import { LinearGradient } from "expo";

const screenHeight = Dimensions.get("window").height;

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <Title>Courses</Title>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                  screenStudy={clazz.screenStudy}
                  screenGroupChat={clazz.screenGroupChat}
                  screenFindTutor={clazz.screenFindTutor}
                  chapters={clazz.chapters}
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
`;

const classes = [
  {
    title: "ECON 1000",
    image: require("../assets/ECON1000-THUMBNAIL.jpg"),
    logo: require("../assets/ECON1000-ICON.png"),
    screenStudy: "ECON1000STUDY",
    screenGroupChat: "ECON1000GROUPCHAT",
    screenFindTutor: "ECON1000FINDTUTOR",
    chapters: [
      {
        title: "What Is Economics?",
        image: require("../assets/Planes28.png"),
        color: "black",
        subtitle:
          "Is economics about money: How people make it and spend it? Is it about business, government, and jobs? Is it about why some people and some nations are rich and others poor? Economics is about all these things. But its core is the study of choices and their consequences."
      },
      { title: "The Economic Problem" },
      { title: "Demand and Supply" },
      { title: "Elasticity" },
      { title: "Efficiency and Equity" },
      { title: "Government Actions in Markets" },
      { title: "Global Markets in Action" },
      { title: "Utility and Demand" },
      { title: "Possibilities, Preferences, and Choices" },
      { title: "Organizing Production" },
      { title: "Output and Costs" },
      { title: "Perfect Competition" },
      { title: "Monopoly" },
      { title: "Monopolistic Competition" },
      { title: "Oligopoly" },
      { title: "Externalities" },
      { title: "Public Goods and Common Resources" }
    ]
  },
  {
    title: "EECS 1012",
    image: require("../assets/EECS1012-THUMBNAIL.jpg"),
    logo: require("../assets/EECS1012-ICON.png"),
    screenStudy: "ECON1000STUDY",
    screenGroupChat: "ECON1000GROUPCHAT",
    screenFindTutor: "ECON1000FINDTUTOR"
  },
  {
    title: "EECS 1022",
    image: require("../assets/EECS1022-THUMBNAIL.jpg"),
    logo: require("../assets/EECS1022-ICON.png")
    // screenStudy: "STUDY"
  },
  {
    title: "MATH 1019",
    image: require("../assets/MATH1090-THUMBNAIL.jpg"),
    logo: require("../assets/MATH1090-ICON.png")
    // screenStudy: "STUDY"
  },
  {
    title: "ADMS 1000",
    image: require("../assets/ADMS1000-THUMBNAIL.jpg"),
    logo: require("../assets/ADMS1000-ICON.png")
    // screenStudy: "STUDY"
  }
];