import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
            <h1 className="App-title">{props.text}</h1>
        </header>
    );
}
export default Header;