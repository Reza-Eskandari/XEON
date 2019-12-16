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
CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }) => <Icon.Ionicons name="ios-school" size={32} />
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
