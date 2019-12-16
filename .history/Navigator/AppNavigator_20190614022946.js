import { createStackNavigator, createAppContainer } from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const AppNavigator = createStackNavigator({
  Account: AccountScreen,
  Section: SectionScreen
});

export default createAppContainer(TabNavigator);
