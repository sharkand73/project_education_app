import React, { useState } from 'react';
import Slide from './Slide.js';
import Quiz from './Quiz.js';

const Lesson = ({selectedInstrument}) => {
    const [currentSlideIndex, setSlideIndex] = useState(0);
    const finalSlideIndex = selectedInstrument.slides.length - 1;

    return (
        <>
        {/* <p>This is a {selectedInstrument.name} lesson</p> */}
        <Slide selectedInstrument={selectedInstrument} 
        currentSlideIndex={currentSlideIndex} 
        setSlideIndex={setSlideIndex}
        finalSlideIndex={finalSlideIndex}
        />
        {/* <Quiz /> */}
        </>
    )
}



export default Lesson;