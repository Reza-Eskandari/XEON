import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class StudyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>StudyScreen!!</Text>
      </View>
    );
  }
}
export default StudyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
