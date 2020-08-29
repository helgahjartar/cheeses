
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Cheeses from './components/Cheeses';
import cheeseApp from './reducers/index';

const store = createStore(cheeseApp);

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <ScrollView>
          <Cheeses/>
        </ScrollView>
      </Provider>
    );
  }
}

export default App;
