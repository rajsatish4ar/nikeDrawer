import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import App from '../screens/App';
import SecondApp from './SecondApp';
import FirstApp from "./FirstApp";
export default createAppContainer(
  createStackNavigator(
      {
        App,
        FirstApp,
        SecondApp
      },
      {
        initialRouteName: 'FirstApp',
        defaultNavigationOptions:{
          header:null
        },
      }
    )
  );
