import React from 'react';

const WinButton = (props) => {
    return (
       <button type="button" disabled={props.disabled} className="App-button App-logo" onClick={props.action}>
            <img alt={props.alt} src={props.src} />
       </button>
    );
}
export default WinButton;