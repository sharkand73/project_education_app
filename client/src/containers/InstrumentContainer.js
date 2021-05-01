import React, {useState, useEffect} from 'react';
import {getInstruments} from '../InstrumentsService.js'

const InstrumentContainer = () => {
    
    const [instrumentList, setInstrumentList] = useState([]);
    const [selectedInstrument, setSelectedInstrument] = useState(null);

    useEffect(() => {
        getInstruments()
        .then((allInstruments) => {
            setInstrumentList(allInstruments)
        })
    }, []);

    // const onClick = (event) => {

    // }

    return (
        <>
        <div>
            <InstrumentMenu instrumentList={instrumentList} />
        </div>
        <div>
            {selectedInstrument ? <Lesson selectedInstrument={selectedInstrument} /> : <Welcome />}
        </div>
        </>
    )

}



export default InstrumentContainer;
