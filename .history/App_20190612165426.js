import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome back,</Title>
        <Name>Meng</Name>
      </TitleBar>
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
  padding-left: 20px;
`;

const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 16;
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
