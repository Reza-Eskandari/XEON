import React from "react";
import { Text, ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./Components/Card";
import { Icon } from "expo";
import { NotificationIcon } from "./Components/Icons";
import Logo from "./Components/Logo";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back,</Title>
            <Name>Meng</Name>
            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30
            }}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <SubTitle>Continue Learning</SubTitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            <Card
              title="Style Components"
              image={require("./assets/background2.jpg")}
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12 sessions"
            />
            <Card
              title="Style Components2"
              image={require("./assets/background16.jpg")}
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12 sessions"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  background: black;
  border-radius: 23;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require("./assets/logo-xd.png"),
    text: "Adobe XD"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-framerx.png"),
    text: "FramerX"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-vue.png"),
    text: "Vue"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  }
];


const cards = [
  {
    title="Style Components2"
              image={require("./assets/background16.jpg")}
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12 sessions"
  }
]
