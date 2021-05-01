import React from 'react';



const InstrumentMenu = ({instrumentList, onClick}) => {

    // const onClick = (event) => {
    //     //selectLesson(event.target.index);
    //     console.log(event.target.value);
    // }

    const instrumentsItems = instrumentList.map((instrument, index) => {
        return (
        <div id='instrument-select' onClick={onClick} index={index} key={index}>{instrumentList[index].name}</div>
        );
    })

    return (
        <div id='instrument-menu'>
            {instrumentsItems}
        </div>
    )
};

export default InstrumentMenu;
