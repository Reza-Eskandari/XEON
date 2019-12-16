import React, { Component } from "react";
import {} from "react-native";
import styled from "styled-components";
import { Icon } from "expo";

const MenuItem = props => (
  //NOTE setting the height of Menu to below - like moving from below to up
  <Container>
    {/*NOTE Adding the PlaceHolder for the Icon*/}
    <IconView>
      {/*NOTE Adding the Icon*/}
      <Icon.Ionicons name={props.icon} size={24} color="#546bfb" />
    </IconView>
    {/*NOTE Adding the PlaceHolder for Title, Text*/}
    <Content>
      {/*NOTE Adding the Title*/}
      <Title>{props.title}</Title>
      {/*NOTE Adding the Text blow the Title*/}
      <Text> {props.text} </Text>
    </Content>
  </Container>
);

export default MenuItem;

//NOTE Base View of Menu Screen
const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;
//NOTE PlaceHolder for the Icon
const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-content: center;
`;
//NOTE PlaceHolder for the Title, Text
const Content = styled.View`
  padding-left: 20px;
`;

//NOTE The Title
const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

//NOTE The Text below the Title
const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
