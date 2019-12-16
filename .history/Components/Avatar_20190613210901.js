import React, { Component } from "react";
import styled from "styled-components";

//NOTE Since Avatar has states we gotta use class and not a const
class Avatar extends Component {
  //NOTE The initial state is when the photo is the avatar-default
  state = {
    photo: "https://cl.ly/8128e9392ba3/download/avatar-default.jpg"
  };

  //NOTE Since Avatar has states we gotta use class and not a const
  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(response => response.json)
      .then(response => {});
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}
export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22;
  margin-left: 20px;
`;
