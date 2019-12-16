// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import styled from "styled-components";

// class ECON1000STUDYCONTENT extends Component {
//   static navigationOptions = { header: null };

//   render() {
//     const { navigation } = this.props;
//     const content = navigation.getParam("content");
//     const study = navigation.getParam("study");
//     const indez = navigation.getParam("indez");
//     return (
//       <Container>
//         <Title>{study.title}</Title>
//         <ChapterIndex>{indez + 1}</ChapterIndex>
//         <VideoView>
//           <PlayLogo />
//         </VideoView>
//         <VideoTitle />
//         <NotesView>
//           <NotesLogo />
//         </NotesView>
//         <NotesTitle />
//       </Container>
//     );
//   }
// }
// export default ECON1000STUDYCONTENT;

// const Container = styled.View`
//   flex: 1;
//   background: #ffdd00;
// `;

// const Title = styled.Text`
//   font-size: 12px;
//   color: black;
//   font-weight: bold;
//   /* position: absolute; */
//   align-self: center;
//   top: 25px;
//   /* text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35); */
//   letter-spacing: 10px;
// `;

// const ChapterIndex = styled.Text`
//   font-size: 60px;
//   color: black;
//   font-weight: 700;
//   /* position: absolute; */
//   top: 0px;
//   left: 0px;
//   opacity: 0.1;
//   /* text-shadow: 0px 15px 10px rgba(0, 0, 0, 0.35); */
// `;

// const VideoView = styled.View`
//   height: 150px;
//   width: 150px;
//   background: orange;
//   border-radius: 75px;
//   box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
//   justify-content: center;
//   align-items: center;
//   align-self: center;
// `;

// const VideoTitle = styled.Text`
//   font-size: 24px;
//   color: white;
//   font-weight: bold;
//   position: absolute;
//   align-self: center;
//   top: 40px;
//   text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
// `;

// const PlayLogo = styled.Image`
//   width: 30px;
//   height: 30px;
// `;
// const NotesView = styled.View`
//   height: 150px;
//   width: 150px;
//   background: orange;
//   border-radius: 75px;
//   box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
//   justify-content: center;
//   align-items: center;
//   align-self: center;
// `;

// const NotesTitle = styled.Text`
//   font-size: 24px;
//   color: white;
//   font-weight: bold;
//   position: absolute;
//   align-self: center;
//   top: 40px;
//   text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.35);
// `;

// const NotesLogo = styled.Image`
//   width: 30px;
//   height: 30px;
// `;

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import FlipCard from "react-native-flip-card";

<FlipCard>
  {/* Face Side */}
  <View style={styles.face}>
    <Text>The Face</Text>
  </View>
  {/* Back Side */}
  <View style={styles.back}>
    <Text>The Back</Text>
  </View>
</FlipCard>;
// import CardFlip from "react-native-card-flip";

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
//           <TouchableOpacity
//             activeOpacity={1}
//             style={[styles.card, styles.card1]}
//             onPress={() => this.card.flip()}
//           >
//             <Text style={styles.label}>AB</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={1}
//             style={[styles.card, styles.card2]}
//             onPress={() => this.card.flip()}
//           >
//             <Text style={styles.label}>CD</Text>
//           </TouchableOpacity>
//         </CardFlip>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   cardContainer: {
//     width: 320,
//     height: 470
//   },
//   card: {
//     width: 320,
//     height: 470,
//     backgroundColor: "#FE474C",
//     borderRadius: 5,
//     shadowColor: "rgba(0,0,0,0.5)",
//     shadowOffset: {
//       width: 0,
//       height: 1
//     },
//     shadowOpacity: 0.5
//   },
//   card1: {
//     backgroundColor: "#FE474C"
//   },
//   card2: {
//     backgroundColor: "#FEB12C"
//   },
//   label: {
//     lineHeight: 470,
//     textAlign: "center",
//     fontSize: 55,
//     fontFamily: "System",
//     color: "#ffffff",
//     backgroundColor: "transparent"
//   }
// });
