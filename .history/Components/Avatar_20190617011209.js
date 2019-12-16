import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

//NOTE Redux - Inorder to have the reducer in App.js receive the name from response.json, First we write mapStateToProps and set the initialState's name to state.name
function mapStateToProps(state) {
  return {
    name: state.name,
    avatar: state.avatar
  };
}
//NOTE Redux - Second we create a function called updateName and giving it a "type":"UPDATE_NAME" and a "name": "name"( or aka "state.name in the mapStateToProps(state)"") and then dipatch it for the reducer in App.js
function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      }),
    updateAvatar: avatar => dispatch({ type: "UPDATE_AVATAR", avatar })
  };
}

//NOTE Since Avatar has states we gotta use class and not a const
class Avatar extends Component {
  //NOTE The initial state of the Avatar class is when the photo is the avatar-default - this state is inside the class cuz it's linked to the Avatar itself
  // state = {
  //   photo: "https://cl.ly/8128e9392ba3/download/avatar-default.jpg"
  // };

  //NOTE When app loads we want the UINames to insert photo and name to Avatar component in AccountScreen
  componentDidMount() {
    this.loadState();
    // fetch("https://uinames.com/api/?ext&gender=male&region=canada") //NOTE First - catch the api link
    //   .then(response => response.json()) //NOTE Second - receive "whatever the fuck it gives us" and turn it to "whateverthefuck.json"
    //   .then(response => {
    //     //NOTE Thirds - use that "whateverthefuck.json" to change the state of the Avatar
    //     this.setState({
    //       photo: response.photo //NOTE Changing the "state of photo(from default avatar photo)" to the photo we get from the "whateverthefuck.json"
    //     });
    //     // this.props.updateName(response.name); //NOTE After we got the "photo" from the api then we get the "name" from api
    //   });
  }

  loadState = () => {
    AsyncStorage.getItem("state").then(serializedState => {
      const state = JSON.parse(serializedState);

      if (state) {
        this.props.updateName(state.name);
        this.props.updateAvatar(state.avatar);
      }
    });
  };

  render() {
    //NOTE The Avatar class return the image - either from the api or using the default avatar photo
    return <Image source={{ uri: this.props.avatar }} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

//NOTE the styling of the avatar image
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22;
  margin-left: 20px;
`;
