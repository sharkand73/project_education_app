import React, {useState, useEffect} from 'react';
import {getInstruments} from '../InstrumentsService.js'
import InstrumentMenu from '../components/InstrumentMenu.js'
import Lesson from '../components/Lesson.js'
import Welcome from '../components/Welcome.js';
import '../App.css';
import Logo from "../components/Logo.png";


const InstrumentContainer = () => {
    
    const [instrumentList, setInstrumentList] = useState([]);

    const [selectedInstrument, setSelectedInstrument] = useState("");
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentSlideIndex, setSlideIndex] = useState(0);
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [lessonStarted, setLessonStarted] = useState(false);

    function playAudio(index){
        if (instrumentList !== []){
            let audioSrc = instrumentList[index].sounds[0];
            let audio = require('../sounds/' + audioSrc).default;
            let clip = new Audio(audio);
            clip.play();
        }
    };

    useEffect(() => {
        getInstruments()
        .then((allInstruments) => {
            setInstrumentList(allInstruments)
        })
    }, []);

    const onClick = (e) => {
        const index = e.target.getAttribute("index");
        setSelectedInstrument(instrumentList[index]);
        setQuizStarted(false);
        setLessonStarted(false);
        setSlideIndex(0);
        //playAudio(index);
    };

    const onInput = (formData) => {
        const name = formData.name;
        const age = formData.age;
        setInputName(name);
        setInputAge(age);
    }

    const homeClick = (e) => {
        setSelectedInstrument("");
        setQuizStarted(false);
        setSlideIndex(0);
        setInputName("");
        setInputAge("");
        setFormSubmitted(false);
        setLessonStarted(false);
    }

    const returnClick = (e) => {
    setSelectedInstrument("");
    setQuizStarted(false);
    setSlideIndex(0);
    setLessonStarted(false);
}

    return (
        <>
        <div id="grid-container">
        <button id="home-button" onClick={homeClick}>Home</button>
        <img className='logo-size' id='icon-grid' src={Logo} alt=""/>
            <InstrumentMenu instrumentList={instrumentList} onClick={onClick} />
            {selectedInstrument ? 
            <Lesson selectedInstrument={selectedInstrument} 
            quizStarted={quizStarted} 
            setQuizStarted={setQuizStarted} 
            currentSlideIndex={currentSlideIndex}
            setSlideIndex={setSlideIndex}
            inputName={inputName}
            inputAge={inputAge}
            lessonStarted={lessonStarted}
            setLessonStarted={setLessonStarted}
            returnClick={returnClick}
            /> : <Welcome onInput={onInput} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>}
        </div>
        </>
    )

}



export default InstrumentContainer;
