import React, { Component } from "react";
import styled from "styled-components";

class Avatar extends Component {
  state = {
    photo: "https://cl.ly/8128e9392ba3/download/avatar-default.jpg"
  };
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
