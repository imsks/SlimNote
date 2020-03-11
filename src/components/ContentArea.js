import React from 'react';

export default class ContentArea extends React.Component {

    selectedText = () => {
        window.getSelection().toString() ? console.log(window.getSelection().toString()) : null;
    }

    render() {
        return(
            <div className="contentarea">
                <form className="contentarea__form">
                    <textarea type="text" className="contentarea__form__input" onSelect={this.selectedText}></textarea>
                </form>
            </div>
        );
    }
}