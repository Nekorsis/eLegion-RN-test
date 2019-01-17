import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import PersonalPage from './containers/PersonalPage/PersonalPage'
import AddCar from './containers/AddCar/AddCar';

const App = createStackNavigator({
  PersonalPage: {screen: PersonalPage},
  AddCar: {screen: AddCar},
});

export default createAppContainer(App);