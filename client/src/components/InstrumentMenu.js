import React from 'react';

const InstrumentMenu = ({instrumentList, onClick}) => {
    
    return (
        <div id='instrument-menu'>
            <div id='instrument-select' onClick={onClick}>Saxophone</div>
            <div id='instrument-select' onClick={onClick}>Double Bass</div>
            <div id='instrument-select' onClick={onClick}>Electric Guitar</div>
            <div id='instrument-select' onClick={onClick}>Trumpet</div>
        </div>
    )



}

export default InstrumentMenu;
