import React from 'react';
import ReactDOM from 'react-dom';
import SlimNoteApp from './components/SlimNoteApp';

// Styles import
import './styles/styles.scss';

// Firebase configuration
// const firebase = require('firebase');
// require('firebase/firestore');

// firebase.initializeApp({
//     apiKey: "AIzaSyA8fGfe0KuE4ER9vEZx0eRw2kWS22ns93o",
//     authDomain: "slimnote-4b563.firebaseapp.com",
//     databaseURL: "https://slimnote-4b563.firebaseio.com",
//     projectId: "slimnote-4b563",
//     storageBucket: "slimnote-4b563.appspot.com",
//     messagingSenderId: "706278061123",
//     appId: "1:706278061123:web:27ca3088a5828a7f49d0f6"
// });

ReactDOM.render(<SlimNoteApp />, document.getElementById('slimnote-container'));
