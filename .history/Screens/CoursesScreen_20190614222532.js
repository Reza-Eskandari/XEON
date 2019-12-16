import React, { Component } from "react";
import { Text, View, StyleSheet, MaskedViewIOS } from "react-native";
import { Constants, LinearGradient } from "expo";

export default class CourseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaskedViewIOS
          style={{ flex: 1 }}
          maskElement={
            <LinearGradient
              colors={["red", "transparent"]}
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
