import React, { Component } from "react";
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

//NOTE Redux - In order to use our actions in App.js we have make those states in App.js to props
function mapStateToProps(state) {
  //NOTE connecting the "action" in InitialState making it a prop here
  return { action: state.action };
}

//NOTE Redux - In order to have the close-button call the "closeMenu" in "opencloseMenu" we set a actiontype to use in "reducer" in "App.js"
function mapDipatchToProps(dipatch) {
  return { closeMenu: () => dipatch({ type: "CLOSE_MENU" }) };
}

//NOTE  Finding the HEIGHT of our screen
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class Menu extends Component {
  state = {
    //NOTE setting the height of Menu to below - like moving from below to up
    top: new Animated.Value(screenHeight)
  };

  //NOTE componentDidMount = Barayer Load kardane openClosemenu - only happens ONCE
  componentDidMount() {
    this.opencloseMenu();
  }

  //NOTE Since componentDidMount only happends once
  componentDidUpdate() {
    this.opencloseMenu();
  }

  //NOTE when we press on close-button spring-animate the menu back down
  opencloseMenu = () => {
    //NOTE if the "action" in "InitialState" from App.js is "openMenu" then...OPEN MENU
    if (this.props.action == "openMenu") {
      //NOTE Saying yo menu spring-animate from BELOW to UP - 0 means all the wway up
      Animated.spring(this.state.top, { toValue: 54 }).start();
    }

    if (this.props.action == "closeMenu") {
      //NOTE Saying yo menu spring-animate from UP to BELOW - like CLOSE
      Animated.spring(this.state.top, { toValue: screenHeight }).start();
    }
  };

  render() {
    return (
      /*NOTE Adding the BaseView where the below items to be placed on */
      <AnimatedContainer style={{ top: this.state.top }}>
        {/*NOTE Adding the PlaceHolder for Images, Title, Subtitle*/}
        <Cover>
          {/*NOTE Adding the Background*-Image*/}
          <Image source={require("../assets/background2.jpg")} />
          {/*NOTE Adding the Title*/}
          <Title>Meng To</Title>
          {/*NOTE Adding the Subtitle*/}
          <SubTitle>Designer at Design+Code</SubTitle>
        </Cover>
        {/*NOTE Adding the close button - We're using props.closeMenu because of the mapDispatchToProps that's holding our closeMenu-function*/}
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            alignSelf: "center",
            zIndex: 2
          }}
        >
          {/*NOTE Adding the circle behind the close-icon*/}
          <CloseView>
            {/*NOTE Adding the close-icon*/}
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        {/*NOTE Adding Content where the MenuItems will be placed*/}
        <Content>
          <ScrollView style={{ paddingTop: 45 }}>
            {/*NOTE Looping through the menuItems below to add them in Content*/}
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </ScrollView>
        </Content>
      </AnimatedContainer>
    );
  }
}

//NOTE we used connect(mapStateToProps, mapDipatchToProps) to connect the Menu page with App.js
export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Menu);

//NOTE Base View of Menu Screen
const Container = styled.View`
  position: absolute;
  background: #f0f3f5;
  width: 100%;
  height: 90%;
  z-index: 100;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden;
  border-bottom-right-radius: ${screenHeight / 2};
  border-bottom-left-radius: ${screenHeight / 2};
`;

//NOTE Since the Menu page moves UP and DOWN the Container needs to be Animated
const AnimatedContainer = Animated.createAnimatedComponent(Container);

//NOTE Placeholder for the IMAGE, Title, SubTitle
const Cover = styled.View`
  height: 400px;
  width: 500px;
  background: black;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-bottom-right-radius: 210px;
  border-bottom-left-radius: 210px;
  overflow: hidden;
`;

//NOTE The Image inside - technicaally underneath Title, SubTitle cuz position=absolute - the Cover
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 250;
  border-bottom-left-radius: 250;
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
  /* width: ${screenWidth}; */
  /* border-bottom-right-radius: ${screenHeight / 6};
  border-bottom-left-radius: ${screenHeight / 6}; */
  background: #f0f3f5;
  padding-left: 50px ;
  padding-right: 50px ;
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
