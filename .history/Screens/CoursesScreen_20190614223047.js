import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StatusBar,
  MaskedViewIOS
} from "react-native";
import styled from "styled-components";

class CoursesScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Container>
        <Image source={require("../assets/CourseScreenBackground.png")} />
        <SafeAreaView>
          <Title>Courses</Title>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            {/*NOTE Looping through the Cards from cards array */}
            {/*NOTE when pressed it'll take you to the SectioScreen & also we're sending Card's data to the SectionScreen using {section: card} */}
            {cards.map((card, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Section", { section: card });
                }}
              >
                <Card
                  title={card.title}
                  image={card.image}
                  logo={card.logo}
                  caption={card.caption}
                  subtitle={card.subtitle}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default CoursesScreen;

//NOTE The Base View of the AccountScreen where it holds things like cards, courses, avatar, etc
const Container = styled.View`
  flex: 1;
  background: #191919;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Title = styled.Text`
  top: 100px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  align-self: center;
`;
