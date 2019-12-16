import React, { Component } from "react";
import ECON1000_STUDY from "../CourseScreen-SubScreens/ECON1000/ECON1000-STUDY";
import ECON1000_GROUPCHAT from "../CourseScreen-SubScreens/ECON1000/ECON1000-GROUPCHAT";
import ECON1000_FINDTUTOR from "../CourseScreen-SubScreens/ECON1000/ECON1000-FINDTUTOR";

const ECONStack = createStackNavigator(
  {
    ECON1000STUDY: ECON1000_STUDY,
    ECON1000GROUPCHAT: ECON1000_GROUPCHAT,
    ECON1000FINDTUTOR: ECON1000_FINDTUTOR
  },
  { mode: "modal" } //NOTE this makes the SectionScreen to appaer from bottop-up (by default is right-left)
);

export default ECONStack;
