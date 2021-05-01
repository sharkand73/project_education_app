import React, {useState, useEffect} from 'react';
import {getInstruments} from '../InstrumentsService.js'
import InstrumentMenu from '../components/InstrumentMenu.js'
import Lesson from '../components/Lesson.js'
import Welcome from '../components/Welcome.js'


const InstrumentContainer = () => {
    
    const [instrumentList, setInstrumentList] = useState([]);
    const [selectedInstrument, setSelectedInstrument] = useState(null);

    useEffect(() => {
        getInstruments()
        .then((allInstruments) => {
            setInstrumentList(allInstruments)
        })
    }, []);

    const onClick = (event) => {
        return(
            console.log("Hello!")
        )
    }

    return (
        <>
        <div>
            <InstrumentMenu instrumentList={instrumentList} onClick={onClick} />
        </div>
        <div>
            {selectedInstrument ? <Lesson selectedInstrument={selectedInstrument} /> : <Welcome />}
        </div>
        </>
    )

}



export default InstrumentContainer;
