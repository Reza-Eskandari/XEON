import { createStackNavigator, createAppContainer } from "react-navigation";
import AccountScreen from "../Screens/AccountScreen";

const AppNavigator = createStackNavigator({
  Account: AccountScreen
});

export default createAppContainer(AppNavigator);
