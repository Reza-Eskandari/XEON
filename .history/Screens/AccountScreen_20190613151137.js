import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import styled from "styled-components";
import Card from "../Components/Card";
import { Icon } from "expo";
import { NotificationIcon } from "../Components/Icons";
import Logo from "../Components/Logo";
import Course from "../Components/Course";
import Menu from "../Components/Menu";
import { connect } from "react-redux";

//NOTE Redux - In order to use our actions in App.js we have make those states in App.js to props
function mapStateToProps(state) {
  //NOTE connecting the "action" in InitialState making it a prop here
  return { action: state.action };
}

//NOTE Redux - In order to have the avatar call the "openMenu" in "opencloseMenu" we set a actiontype to use in "reducer" in "App.js"
function mapDipatchToProps(dipatch) {
  return { openMenu: () => dipatch({ type: "OPEN_MENU" }) };
}

class AccountScreen extends React.Component {
  state = {
    scale: new Animated.Value(1)
  };

  componentDidUpdate() {
    this.opencloseMenu();
  }

  opencloseMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, { toValue: 0.9 }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, { toValue: 1 }).start();
    }
  };

  render() {
    return (
      <Menu />
      <RootView>
        <AnimatedContainer style={{ transform: [{ scale: this.state.scale }] }}>
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute" }}
                >
                  <Avatar source={require("../assets/avatar.jpg")} />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>Meng</Name>
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <SubTitle>Continue Learning</SubTitle>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 30 }}
              >
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    logo={card.logo}
                    caption={card.caption}
                    subtitle={card.subtitle}
                  />
                ))}
              </ScrollView>
              <SubTitle>Popular Courses</SubTitle>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  title={course.title}
                  subtitle={course.subtitle}
                  image={course.image}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(AccountScreen);

const RootView = styled.View`
  flex: 1;
  background-color: black;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  background: black;
  border-radius: 23;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require("../assets/logo-xd.png"),
    text: "Adobe XD"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-framerx.png"),
    text: "FramerX"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-vue.png"),
    text: "Vue"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  }
];

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

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
