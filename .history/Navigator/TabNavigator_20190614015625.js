import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";
import { Icon } from "expo";

const AccountStack = createStackNavigator({
  Account: AccountScreen,
  Section: SectionScreen
});
AccountStack.navigationOptions = { tabBarLabel: "Account" };

const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});
CoursesStack.navigationOptions = { tabBarLabel: "Courses" };

const HomesStack = createStackNavigator({
  Home: SectionScreen
});
HomeStack.navigationOptions = { tabBarLabel: "Home" };

const TabNavigator = createBottomTabNavigator({
  CoursesStack,
  HomesStack,
  AccountStack
});

export default TabNavigator;
