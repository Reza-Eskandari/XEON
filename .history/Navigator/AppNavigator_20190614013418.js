import { createStackNavigator, createAppContainer } from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";
import SectionScreen from "../Screens/SectionScreen";

const AppNavigator = createStackNavigator({
  Account: AccountScreen,
  Section: SectionScreen
});

export default createAppContainer(AppNavigator);
