import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";
import { Icon } from "expo";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const AccountStack = createStackNavigator({
  Account: AccountScreen,
  Section: SectionScreen
});
AccountStack.navigationOptions = {
  tabBarLabel: "Account",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-person"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});
CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }) => <Icon.Ionicons name="ios-school" size={26} />
};

const HomeStack = createStackNavigator({
  Home: SectionScreen
});
HomeStack.navigationOptions = { tabBarLabel: "Home" };

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  AccountStack
});

export default TabNavigator;
