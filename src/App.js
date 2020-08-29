import 'react-native-gesture-handler';
import React, { Component, Button } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Cheeses from './components/Cheeses';
import CheeseDetail from './components/CheeseDetail';
import cheeseApp from './reducers/index';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const store = createStore(cheeseApp);

const AppNavigator = createStackNavigator({
  Home: {
    screen: Cheeses
  },
  CheeseDetail: {
    screen: CheeseDetail
  }
});

const AppContainer = createAppContainer(AppNavigator);


class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;
