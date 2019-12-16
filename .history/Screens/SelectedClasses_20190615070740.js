import React, { Component } from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";

class SectionScreen extends Component {
  static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const section = navigation.getParam("section"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads
    return (
      //NOTE The BaseView of the SectionScreen
      <Container>
        {/*NOTE The place holde of the Image, Title, Caption */}
        <Cover>
          {/*NOTE The Image of the chosen card */}
          <Image source={section2.image} />
          <Wrapper>
            <Logo source={section2.logo} />
          </Wrapper>
          {/*NOTE The Title of the chosen card */}
          <Title>{section2.title}</Title>
        </Cover>
        {/*NOTE Making the CloseView and icon clickable */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          {/*NOTE the white circular view behind the close icon */}
          <CloseView>
            {/*NOTE The close icon */}
            <Icon.Ionicons
              name="ios-close"
              size={36}
              color="#4775f2"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}
export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;
const Cover = styled.View`
  height: 375px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 28px;
`;
const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
const SubTitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
`;
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  width: 170px;
  top: 78px;
  left: 28px;
`;
const Caption = styled.Text`
  font-size: 17px;
  color: white;
  position: absolute;
  width: 300px;
  bottom: 20px;
  left: 20px;
`;

const CloseView = styled.View`
  height: 32px;
  width: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0 0.15);
  justify-content: center;
  align-items: center;
`;
