import { createStackNavigator, createAppContainer } from 'react-navigation';

import Loser from './Loser';

const AppNavigator = createStackNavigator({
  Loser: { screen: Loser },
});

export default createAppContainer(AppNavigator);
