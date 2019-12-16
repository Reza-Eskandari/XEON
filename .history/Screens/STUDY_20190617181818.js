import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Study extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Study!!</Text>
      </View>
    );
  }
}
export default Study;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
