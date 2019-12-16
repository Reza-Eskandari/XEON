import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Account from "./Screens/Account";

const initialState = {
  action: "openMenu"
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

const App = () => (
  /*NOTE Where Redux stores all of our data*/
  <Provider store={store}>
    <Account />
  </Provider>
);

export default App;
