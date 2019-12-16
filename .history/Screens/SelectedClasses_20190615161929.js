import React, { Component } from "react";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
import StudyComponent from "../Components/StudyComponent";

class SelectedClasses extends Component {
  static navigationOptions = { header: null }; //NOTE this makes the header of the tabbar hidden

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props; //NOTE This is how we receive Card's data from the AccountScreen by turning them into props
    const selected = navigation.getParam("selected"); //NOTE This is how we use the Card's data(each item in the cars array in AccountScreen) when the SectionScreen loads
    return (
      //NOTE The BaseView of the SectionScreen
      <Container>
        {/*NOTE The place holde of the Image, Title, Caption */}
        <Cover>
          {/*NOTE The Image of the chosen card */}
          <Image source={selected.image} />
          <Wrapper>
            <Logo source={selected.logo} />
          </Wrapper>
          {/*NOTE The Title of the chosen card */}
          <Title>{selected.title}</Title>
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
        <ComponentsContainer>
          {components.map((component, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.props.navigation.push("SelectedComponents", {
                  selectedcomponent: component
                });
              }}
            >
              <StudyComponent
                title={component.title}
                image={component.image}
                logo={component.logo}
              />
            </TouchableOpacity>
          ))}
        </ComponentsContainer>
      </Container>
    );
  }
}
export default SelectedClasses;

const Container = styled.View`
  flex: 1;
`;
const Cover = styled.View`
  height: 100%;
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

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  position: absolute;
  width: 170px;
  top: 78px;
  left: 28px;
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
const ComponentsContainer = styled.View`
  position: absolute;
  padding-top: 120px;
  align-self: center;
`;

const components = [
  {
    title: "STUDY",
    image: require("../assets/ECON1000-THUMBNAIL.jpg"),
    logo: require("../assets/ECON1000-ICON.png")
  },
  {
    title: "GROUP CHAT",
    image: require("../assets/EECS1012-THUMBNAIL.jpg"),
    logo: require("../assets/EECS1012-ICON.png")
  },
  {
    title: "FIND TUTOR",
    image: require("../assets/EECS1022-THUMBNAIL.jpg"),
    logo: require("../assets/EECS1022-ICON.png")
  }
];
