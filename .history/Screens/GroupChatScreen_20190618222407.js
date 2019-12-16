import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class GroupChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GroupChatScreen</Text>
      </View>
    );
  }
}
export default GroupChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
