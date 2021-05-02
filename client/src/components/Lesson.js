import React, { useState } from 'react';
import Slide from './Slide.js';
import QuizForm from './QuizForm.js';

const Lesson = ({selectedInstrument}) => {
    const [currentSlideIndex, setSlideIndex] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const finalSlideIndex = selectedInstrument.slides.length - 1;

    const prev = () => {
        if (currentSlideIndex>0) {setSlideIndex(currentSlideIndex - 1)};
    };
    const next = () => {
        if (currentSlideIndex<finalSlideIndex) {setSlideIndex(currentSlideIndex + 1)};
    };

    const startQuiz = () => {
        return(
            setQuizStarted(true)
        )
    };


    return (
        <>
        {quizStarted ? 
        <QuizForm selectedInstrument={selectedInstrument}/> : 
        <div>
        <h3>{selectedInstrument.name} Lesson</h3>
        <Slide selectedInstrument={selectedInstrument} 
        currentSlideIndex={currentSlideIndex} 
        finalSlideIndex={finalSlideIndex}
        prev={prev}
        next={next}
        startQuiz={startQuiz}
        /> 
        </div>}
        </>
    )
}



export default Lesson;