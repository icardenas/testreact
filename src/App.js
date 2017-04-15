import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyDChYefuJXfsRwm1dj1VaLdOMr2SDIKaPI',
    authDomain: 'testreact-bfd5b.firebaseapp.com',
    databaseURL: 'https://testreact-bfd5b.firebaseio.com',
    projectId: 'testreact-bfd5b',
    storageBucket: 'testreact-bfd5b.appspot.com',
    messagingSenderId: '1053061829770'
  };

firebase.initializeApp(config);

class App extends Component {

 constructor(args){
   super(args);
   this.state={name:'pepe'}
 }

 componentWillMount(){
   const fire = firebase.database().ref().child('object').child('name');
    fire.on('value',(snapshot)=>{
        this.setState({
          name: snapshot.val()
        })
    })
 }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.name}
      </div>
    );
  }
}

export default App;
