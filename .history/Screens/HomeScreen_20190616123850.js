import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "../Components/Projects-Home";

class HomeScreen extends Component {
  static navigationOptions = { header: null };
  render() {
    return <ProjectCard />;
  }
}
export default HomeScreen;
