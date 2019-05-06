import Home from './src/screens/Home';
import Map from './src/screens/Map';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home },
  Map: { screen: Map }
});

export default createAppContainer(App);