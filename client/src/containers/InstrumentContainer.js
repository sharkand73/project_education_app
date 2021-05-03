import React, {useState, useEffect} from 'react';
import {getInstruments} from '../InstrumentsService.js'
import InstrumentMenu from '../components/InstrumentMenu.js'
import Lesson from '../components/Lesson.js'
import Welcome from '../components/Welcome.js'
import '../App.css';


const InstrumentContainer = () => {
    
    const [instrumentList, setInstrumentList] = useState([]);
    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentSlideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        getInstruments()
        .then((allInstruments) => {
            setInstrumentList(allInstruments)
        })
    }, []);

    const onClick = (e) => {
        const index = e.target.getAttribute("index");
        //console.log(index);
        //console.log(instrumentList[index].name);
        setSelectedInstrument(instrumentList[index]);
        setQuizStarted(false)
        setSlideIndex(0);
    };

    // useEffect(() => {
    //     console.log(`You have chosen ${selectedInstrument.name}`)
    //     }, [selectedInstrument]);

    return (
        <>
        <div id="grid-container" >
     
            <InstrumentMenu instrumentList={instrumentList} onClick={onClick} />
       
    
            {selectedInstrument ? 
            <Lesson selectedInstrument={selectedInstrument} 
            quizStarted={quizStarted} 
            setQuizStarted={setQuizStarted} 
            currentSlideIndex={currentSlideIndex}
            setSlideIndex={setSlideIndex}
            /> : <Welcome />}
   
        </div>
        </>
    )

}



export default InstrumentContainer;
