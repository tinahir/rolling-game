import React from 'react';

const SymbolButton = (props) => {

    const GetSymbolClass = () => {
        return `symbol-Button symbol-${props.value}`;
    }

    return (
       <button type="button" className={GetSymbolClass()}>
       </button>
    );
}
export default SymbolButton;