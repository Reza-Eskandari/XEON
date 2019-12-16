import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require("./assets/background7.jpg")}
      >
        <LinearGradient
          colors={[
            "rgba(156, 68, 249,0.5)",
            "rgba(114, 110, 248,0.5)",
            "rgb(79, 206, 249)"
          ]}
          style={styles.contentContainer}
        />
      </ImageBackground>
    );
  }
}

export default CoursesScreen;

//NOTE The Base View of the AccountScreen where it holds things like cards, courses, avatar, etc
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch", //TODO: Importate para que la imagen abarque toda la pantalla
    backgroundColor: "transparent"
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: "visible",
    alignItems: "center",
    alignSelf: "stretch"
  }
});
