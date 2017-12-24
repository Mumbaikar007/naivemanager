/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
  var config = {
      apiKey: "AIzaSyDUFATmuqBRWxvy4Jt9BUdS3vp-rjP_eVI",
      authDomain: "naivemanager-89c82.firebaseapp.com",
      databaseURL: "https://naivemanager-89c82.firebaseio.com",
      projectId: "naivemanager-89c82",
      storageBucket: "naivemanager-89c82.appspot.com",
      messagingSenderId: "897352416388"
  };
  firebase.initializeApp(config);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
