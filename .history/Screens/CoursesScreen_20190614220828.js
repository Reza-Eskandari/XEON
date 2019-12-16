import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View>
        <SafeAreaView>
          <LinearGradient
            colors={["blue", "tomato"]}
            style={{ width: 100, height: 100 }}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default CoursesScreen;
