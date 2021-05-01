import React from 'react';
import Trumpet from "./Trumpet.png";
import Double_Bass from "./Double_Bass.png";
import Electric_Guitar from "./Electric_Guitar.png";
import Saxophone from "./Saxophone.png";




const InstrumentMenu = ({instrumentList, onClick}) => {

    // const onClick = (event) => {
    //     //selectLesson(event.target.index);
    //     console.log(event.target.value);
    // }

    const menu_images = {"Trumpet":Trumpet, "Double Bass":Double_Bass, "Electric Guitar":Electric_Guitar, "Saxophone":Saxophone}

    const instrumentsItems = instrumentList.map((instrument, index) => {
        return (
        // <div id='instrument-select' onClick={onClick} index={index} key={index} src={Trumpet} alt="" >{instrumentList[index].name} </div>
        // <img id='instrument-select' onClick={onClick} index={index} key={index} type="image" src={Trumpet} alt="" />
        <img id='instrument-select' onClick={onClick} index={index} key={index} type="image" src={menu_images[instrument.name]} alt="" />
        );
    })

    return (
        <div id='instrument-menu'>
            {instrumentsItems}
        </div>
    )
};

export default InstrumentMenu;
