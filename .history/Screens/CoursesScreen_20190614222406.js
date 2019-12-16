import React, { Component } from "react";
import { Text, View, StyleSheet, MaskedViewIOS } from "react-native";
import { Constants, LinearGradient } from "expo";

// You can import from local files
import AssetExample from "./components/AssetExample";

// or any pure javascript modules available in npm
import { Card } from "react-native-elements"; // 0.18.5

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaskedViewIOS
          style={{ flex: 1 }}
          maskElement={
            <LinearGradient
              colors={["black", "transparent"]}
              style={{ flex: 1 }}
            />
          }
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
            <Text>Hello world</Text>
          </View>
        </MaskedViewIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
