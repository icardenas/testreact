import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import ReactGA from 'react-ga';


ReactGA.initialize('UA-97463187-1');

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
   this.state={name:'pepe', name2:''}
 }

 componentWillMount(){
   const fire = firebase.database().ref().child('object').child('name');
    fire.on('value',(snapshot)=>{
        this.setState({
          name: snapshot.val()
        })
    })

    const fire2 = firebase.database().ref().child('object2').child('name');
    fire2.on('value',(snapshot)=>{
        this.setState({
          name2: snapshot.val()
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
        {this.state.name2}
      </div>
    );
  }
}

export default App;
