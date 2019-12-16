import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Icon } from "expo";
import ECON1000_STUDY from "../CourseScreen-SubScreens/ECON1000/ECON1000-STUDY";
import ECON1000_GROUPCHAT from "../CourseScreen-SubScreens/ECON1000/ECON1000-GROUPCHAT";
import ECON1000_FINDTUTOR from "../CourseScreen-SubScreens/ECON1000/ECON1000-FINDTUTOR";

const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
const selected = navigation.getParam("selected"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads

export const ECON1000STACK = createStackNavigator(
  {
    ECON1000STUDY: ECON1000_STUDY,
    ECON1000GROUPCHAT: ECON1000_GROUPCHAT,
    ECON1000FINDTUTOR: ECON1000_FINDTUTOR
  },
  { mode: "modal" } //NOTE this makes the SectionScreen to appaer from bottop-up (by default is right-left)
);

ECON1000STACK.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true; //NOTE this allows the tabbar to appear on the AccountScreen
  const routeName = navigation.state.routes[navigation.state.index].routeName; //NOTE this is finding when the Screens in AccountScreen are loading

  //NOTE If the SectionScreen is loaded = Don't show the Tabbar; if not show the tabbar
  if (
    routeName == selected.screenStudy ||
    routeName == selected.screenGroupChat ||
    routeName == selected.screenFindTutor
  ) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible //NOTE show the Tabbar
  };
};
