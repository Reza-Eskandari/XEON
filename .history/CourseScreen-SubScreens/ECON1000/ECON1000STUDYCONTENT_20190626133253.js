import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";

class ECON1000STUDYCONTENT extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>componentName</Text>
      </View>
    );
  }
}
export default ECON1000STUDYCONTENT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
