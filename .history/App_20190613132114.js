import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Account from "./Screens/AccountScreen";

const initialState = {
  action: ""
};

//NOTE "state" is what is bein sent by default from initialState & "action" is what being sent from mapDispatchToProps (like action.type="CLOSE_MENU")
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  /*NOTE Where Redux stores all of our data*/
  <Provider store={store}>
    <Account />
  </Provider>
);

export default App;
