import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Account from "./Screens/AccountScreen";
import AppNavigator from "./Navigator/AppNavigator";

const initialState = {
  action: "",
  name: ""
};

//NOTE "state" is what is bein sent by default from initialState & "action" is what being sent from mapDispatchToProps (like action.type="CLOSE_MENU")
const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* NOTE  it receives the "actiontype" from "mapDispatchToProps" in "AccountScreen" and then calls the "opencloseMenu function's openMenu" in "Menu"*/
    case "OPEN_MENU":
      return { action: "openMenu" };
    /* NOTE  it receives the "actiontype" from "mapDispatchToProps" in "Menu" and then calls the "opencloseMenu function's closeMenu" in "Menu"*/
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    /* NOTE  if neither the "avatar" or the "closeButton" is being clicked then do nothing and just show the AccountScreen */
    case "OPEN_CARD":
      return { action: "openCard" };
    case "CLOSE_CARD":
      return { action: "closeCard" };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  /*NOTE Where Redux stores all of our data*/
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
