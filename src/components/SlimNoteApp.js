import React from 'react';
import Navbar from './Navbar';
import ContentArea from './ContentArea';
import Footer from './Footer';

// const firebase = require('firebase');

export default class SlimNoteApp extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     selectedNoteIndex: null,
  //     selectedNote: null,
  //     notes: null
  //   };
  // }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <ContentArea />
        <Footer />
      </div>
    )
  }

  // componentDidMount = () => {
  //   firebase
  //   .firestore()
  //   .collection('notes')
  //   .onSnapshot(serverUpdate => {
  //     const notes = serverUpdate.docs.map(_doc => {
  //       const data = _doc.data;
  //       data['id'] = _doc.id;
  //       return data;
  //     });
  //     console.log(notes);
  //     this.setState({
  //       notes: notes
  //     });
  //   })
  // }
}
