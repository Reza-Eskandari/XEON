import React, { Component } from "react";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
import MenuItem from "./MenuItem";

//NOTE  Finding the HEIGHT of our screen
const screenHeight = Dimensions.get("window").height;
// const screenWidth = Dimensions.get("window").width;

class Menu extends Component {
  state = {
    //NOTE setting the height of Menu to below - like moving from below to up
    top: new Animated.Value(screenHeight)
  };

  //NOTE componentDidMount = yeho eine kirekhar
  componentDidMount() {
    //NOTE Saying yo menu spring-animate from BELOW to UP - 0 means all the wway up
    Animated.spring(this.state.top, { toValue: 0 }).start();
  }

  //NOTE when we press on close-button spring-animate the menu back down
  closeMenu = () => {
    //NOTE Saying yo menu spring-animate from UP to BELOW - like CLOSE
    Animated.spring(this.state.top, { toValue: screenHeight }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Meng To</Title>
          <SubTitle>Designer at Design+Code</SubTitle>
        </Cover>
        <TouchableOpacity
          onPress={this.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            alignSelf: "center",
            zIndex: 2
          }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}
export default Menu;

//NOTE Base View of Menu Screen
const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

//NOTE Since the Menu page moves UP and DOWN the Container needs to be Animated
const AnimatedContainer = Animated.createAnimatedComponent(Container);

//NOTE Placeholder for the IMAGE, Title, SubTitle
const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

//NOTE The Image inside - technicaally underneath Title, SubTitle cuz position=absolute - the Cover
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

//NOTE The Title inside - technicaally ontop of Image - the Cover
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

//NOTE The SubTitle inside - technicaally ontop of Image - the Cover
const SubTitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;

//NOTE The circle behind the cloe-icon
const CloseView = styled.View`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;

//NOTE PlaceHolder for MenuItems like icons, titles and text
const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

//NOTE Dynamically adding the icons, titles and text we want in the Content - this is calling the {props.whatever} in MenuItem
const menuItems = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course"
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!"
  }
];
