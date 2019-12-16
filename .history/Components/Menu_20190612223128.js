import React, { Component } from "react";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class Menu extends Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    Animated.spring(this.state.top, { toValue: 0 }).start();
  }

  closeMenu = () => {
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

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;

const CloseView = styled.View`
  height: 44px;
  width: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;
const Content = styled.View`
  height: ${screenHeight - 200};
  width: ${screenWidth + 150};
  border-bottom-left-radius: ${screenHeight / 2};
  border-bottom-right-radius: ${screenHeight / 2};

  background: #f0f3f5;
  padding: 50px;
`;

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
