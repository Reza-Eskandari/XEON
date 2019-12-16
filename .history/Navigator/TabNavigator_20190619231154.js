import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";
import { Icon } from "expo";
import CoursesScreen from "../Screens/CoursesScreen";
import HomeScreen from "../Screens/HomeScreen";
import SelectedClasses from "../Screens/SelectedClasses";
import ECON1000_STUDY from "../CourseScreen-SubScreens/ECON1000/ECON1000-STUDY";
import ECON1000_GROUPCHAT from "../CourseScreen-SubScreens/ECON1000/ECON1000-GROUPCHAT";
import ECON1000_FINDTUTOR from "../CourseScreen-SubScreens/ECON1000/ECON1000-FINDTUTOR";

//NOTE declaring the active and inactive colors (selected or unselected)
const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

//NOTE creating the Account button on the tabbar
const AccountStack = createStackNavigator(
  {
    Account: AccountScreen, //NOTE this says when user presses on the Account button it'll take him to the AccountScreen
    Section: SectionScreen //NOTE this says when user presses on the Cards it'll take him to the SectionScreen
  },
  { mode: "modal" } //NOTE this makes the SectionScreen to appaer from bottop-up (by default is right-left)
);
//NOTE Adjusting the settings of the Account button
AccountStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true; //NOTE this allows the tabbar to appear on the AccountScreen
  const routeName = navigation.state.routes[navigation.state.index].routeName; //NOTE this is finding when the Screens in AccountScreen are loading

  //NOTE If the SectionScreen is loaded = Don't show the Tabbar; if not show the tabbar
  if (routeName == "Section") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible, //NOTE show the Tabbar
    tabBarLabel: "Account", //NOTE write "Account" on the button
    tabBarIcon: (
      { focused } //NOTE Adding the icon
    ) => (
      <Icon.Ionicons
        name="ios-person"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

//NOTE creating the Account button on the tabbar
const CoursesStack = createStackNavigator(
  {
    Courses: CoursesScreen, //NOTE this says when user presses on the Account button it'll take him to the AccountScreen
    Selected: SelectedClasses, //NOTE this says when user presses on the Cards it'll take him to the SectionScreen

    ECON1000STUDY: ECON1000_STUDY,
    ECON1000GROUPCHAT: ECON1000_GROUPCHAT,
    ECON1000FINDTUTOR: ECON1000_FINDTUTOR
  },
  { mode: "modal" } //NOTE this makes the SectionScreen to appaer from bottop-up (by default is right-left)
);
//NOTE Adjusting the settings of the Account button
CoursesStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = false; //NOTE this allows the tabbar to appear on the AccountScreen
  const routeName = navigation.state.routes[navigation.state.index].routeName; //NOTE this is finding when the Screens in AccountScreen are loading

  //NOTE If the SectionScreen is loaded = Don't show the Tabbar; if not show the tabbar
  if (routeName == "Courses") {
    tabBarVisible = true;
  }
  return {
    tabBarVisible, //NOTE show the Tabbar
    tabBarLabel: "Courses", //NOTE write "Account" on the button
    tabBarIcon: (
      { focused } //NOTE Adding the icon
    ) => (
      <Icon.Ionicons
        name="ios-school"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const HomeStack = createStackNavigator({
  Home: HomeScreen
});
HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator(
  {
    AccountStack,
    HomeStack,
    CoursesStack
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 0.1
      },
      style: {
        backgroundColor: "#191919"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
