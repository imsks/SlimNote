import React from 'react';
import Navbar from './Navbar';

export default class ContentArea extends React.Component {

    state = {
        selectedText: ''
    };

    selectText = () => {
        if(window.getSelection().toString()) {
            this.setState({
                selectedText: window.getSelection().toString(),
            });
            // console.log(window.getSelection().toString());
        }
    }

    render() {
        return(
            <div>
                <Navbar selectText={this.state.selectedText}/>
                <div className="contentarea">
                <form className="contentarea__form">
                    <textarea type="text" className="contentarea__form__input" onSelect={this.selectText}></textarea>
                </form>
                <h1>{this.state.selectedText}</h1>
            </div>
            </div>
        );
    }
}