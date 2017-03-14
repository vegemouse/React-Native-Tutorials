import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCSl-X-lmvOieGvyes53V0WocWO6-tfQkk',
        authDomain: 'authentication-cd4d5.firebaseapp.com',
        databaseURL: 'https://authentication-cd4d5.firebaseio.com',
        storageBucket: 'authentication-cd4d5.appspot.com',
        messagingSenderId: '989407192669'
      });
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
