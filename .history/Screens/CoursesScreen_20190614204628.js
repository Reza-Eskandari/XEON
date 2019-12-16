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
import Card from "../Components/Card";
import { Icon } from "expo";
import { NotificationIcon } from "../Components/Icons";
import Logo from "../Components/Logo";
import Course from "../Components/Course";
import Menu from "../Components/Menu";
import { connect } from "react-redux";
import Avatar from "../Components/Avatar";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Section", { section: card });
                }}
              >
                <Card
                  title={card.title}
                  image={card.image}
                  logo={card.logo}
                  caption={card.caption}
                  subtitle={card.subtitle}
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
  background-color: #191919;
  align-items: center;
`;

//NOTE Dynamically adding the cards with titles,imgs,caption,etc we want in the Card component
const cards = [
  {
    title: "Style Components",
    image: require("../assets/background16.jpg"),
    logo: require("../assets/logo-react.png"),
    caption: "React Native",
    subtitle: "1 of 12 sessions"
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
  }
];
