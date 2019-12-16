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

//NOTE Redux - In order to use our actions in App.js we have make those states in App.js to props
function mapStateToProps(state) {
  //NOTE connecting the "action" in InitialState making it a prop here
  return { action: state.action, name: state.name };
}

//NOTE Redux - In order to have the avatar call the "openMenu" in "opencloseMenu" we set a actiontype to use in "reducer" in "App.js"
function mapDipatchToProps(dipatch) {
  return { openMenu: () => dipatch({ type: "OPEN_MENU" }) };
}

class AccountScreen extends React.Component {
  //NOTE Setting the initial states for things such as "scale", "opacity" and "borderradius" in "AccountScreen" to Animate(aka changing their values and ultimately states)
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    borderradius: new Animated.Value(0)
  };

  //NOTE since it's componentDidMount, it means that it load like kirekhar in the begining. So here StatusBar is gna be dark in the begining
  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  //NOTE Allows the Animated states in openCloseMenu to be updated no matte how many times you trigger it
  componentDidUpdate() {
    this.opencloseMenu();
  }

  //NOTE This function communicates with the "switch" in "reducer" in "App.js"
  opencloseMenu = () => {
    //NOTE when the user presses on "Avatar", the "TouchableOpacity" calls the "mapDispatchToProps's openMenu" which then calls the reducer in "App.js", AND THEN calls the following animations
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, { toValue: 0.9 }).start();
      Animated.spring(this.state.opacity, { toValue: 0.5 }).start();
      Animated.spring(this.state.borderradius, { toValue: 15 }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    //NOTE when the user presses on closeButton in the Menu, the TouchableOpacity calls the "mapDispatchToProps's closeMenu in Menu.js" which then calls the "reducer" in "App.js", AND THEN calls the following animations
    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, { toValue: 1 }).start();
      Animated.spring(this.state.opacity, { toValue: 1 }).start();
      Animated.spring(this.state.borderradius, { toValue: 0 }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      /*NOTE We have this "RootView" which is placed behind the "AccountScreen" because when it scales out we wanna have a black-background */
      <RootView>
        {/*NOTE We have the :Menu: avilabale but it's positioned below the "AccountScreen" waiting for the "Avatar" to be triggered to appear*/}
        <Menu />
        {/*NOTE The Base View of the AccountScreen where it holds all of the following things like cards, courses, avatar, etc*/}
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
            borderRadius: this.state.borderradius
          }}
        >
          {/*NOTE We add the SafeAreaView to not interfere with the StatusBar texts */}
          <SafeAreaView>
            {/*NOTE To scroll the Container */}
            <ScrollView>
              {/*NOTE The section where holds all Avatar, Name, NotificationIcon.*/}
              <TitleBar>
                {/*NOTE Inorder to press the avatar like button and to trigger the openMenu function from mapDispatchToPros's openMenu function which the => reducer in App.js => opencloseMenu's openMenu "if statement"*/}
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0 }}
                >
                  {/*NOTE Adding the avatar*/}
                  <Avatar />
                </TouchableOpacity>
                {/*NOTE Adding the Welcome back,*/}
                <Title>Welcome back,</Title>
                {/*NOTE Adding the name of the avatar*/}
                <Name>Meng</Name>
                {/*NOTE Adding the custom svg notification icon*/}
                <NotificationIcon
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              {/*NOTE Adding the horizontal scrollview for the Logo Boxes*/}
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
                {/*NOTE Looping through the logos from logos array */}
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              {/*NOTE Adding the Continue learning Text*/}
              <SubTitle>Continue Learning</SubTitle>
              {/*NOTE Adding the horizontal scrollview for the cards*/}
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 30 }}
              >
                {/*NOTE Looping through the Cards from cards array */}
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
              {/*NOTE Adding the Popular Courses Text */}
              <SubTitle>Popular Courses</SubTitle>
              {/*NOTE Looping through the Courses from courses array */}
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

//NOTE We have this "RootView" which is placed behind the "AccountScreen" because when it scales out we wanna have a black-background
const RootView = styled.View`
  flex: 1;
  background-color: black;
`;

//NOTE The Base View of the AccountScreen where it holds things like cards, courses, avatar, etc
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

//NOTE In order to make the entire screen animate such as scaling, opacity we need to Animate it by linking "AnimatedContainer" to "Container"
const AnimatedContainer = Animated.createAnimatedComponent(Container);

//NOTE The section where holds all Avatar, Name, NotificationIcon.
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

//NOTE Adding the avatar
// const Avatar = styled.Image`
// width: 46px;
// height: 46px;
// background: black;
// border-radius: 23;
// margin-left: 20px;
// `;

//NOTE Adding the Welcome back
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

//NOTE Adding the name of the avatar
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

//NOTE Adding the Continue learning Text
const SubTitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

//NOTE Dynamically adding the logos, titles we want in the Logo component
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

//NOTE Dynamically adding the courses with titles,imgs,caption,etc we want in the Course component
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
