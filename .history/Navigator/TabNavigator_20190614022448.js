import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";
import { Icon } from "expo";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const AccountStack = createAnimatedSwitchNavigator(
  {
    Account: AccountScreen,
    Section: SectionScreen
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    )
  }
);
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

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    CoursesStack,
    AccountStack
  },
  {
    style: {
      backgroundColor: "blue"
    }
  }
);

export default TabNavigator;
