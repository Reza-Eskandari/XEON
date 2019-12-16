import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";

const AccountStack = createStackNavigator({
  Account: AccountScreen,
  Section: SectionScreen
});
const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});
const HomesStack = createStackNavigator({
  Home: SectionScreen
});

const TabNavigator = createBottomTabNavigator({
  CoursesStack,
  HomesStack,
  AccountStack
});

export default TabNavigator;
