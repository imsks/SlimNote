import React from 'react';

export default class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <button className="navbar__functions">New File</button>
                <button className="navbar__functions">Share</button>
                <div className="navbar__style">
                    <button className="navbar__style__buttons">H</button>
                    <button className="navbar__style__buttons">Size</button>
                    <button className="navbar__style__buttons">B</button>
                    <button className="navbar__style__buttons">I</button>
                    <button className="navbar__style__buttons">U</button>
                    <button className="navbar__style__buttons">OL</button>
                    <button className="navbar__style__buttons">UL</button>
                    <button className="navbar__style__buttons">Text Color</button>
                    <button className="navbar__style__buttons">Highlight Color</button>
                    <button className="navbar__style__buttons">Add Link</button>
                    <button className="navbar__style__buttons">Align</button>
                </div>
            </div>
        );
    }
}