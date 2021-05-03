import React, {useState, useEffect} from 'react';
import {getInstruments} from '../InstrumentsService.js'
import InstrumentMenu from '../components/InstrumentMenu.js'
import Lesson from '../components/Lesson.js'
import Welcome from '../components/Welcome.js'


const InstrumentContainer = () => {
    
    const [instrumentList, setInstrumentList] = useState([]);
    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentSlideIndex, setSlideIndex] = useState(0);
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");

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


    const onInput = (formData) => {
        console.log(formData)
        const name = formData.name;
        const age = formData.age;
        setInputName(name);
        setInputAge(age);
    }

    return (
        <>
        <div>
            <InstrumentMenu instrumentList={instrumentList} onClick={onClick} />
        </div>
        <div>
            {selectedInstrument ? 
            <Lesson selectedInstrument={selectedInstrument} 
            quizStarted={quizStarted} 
            setQuizStarted={setQuizStarted} 
            currentSlideIndex={currentSlideIndex}
            setSlideIndex={setSlideIndex}
            inputName={inputName}
            inputAge={inputAge}
            /> : <Welcome onInput={onInput}/>}
        </div>
        </>
    )

}



export default InstrumentContainer;
