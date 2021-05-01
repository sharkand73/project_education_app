import React from 'react';
import Slides from './Slides.js';
import Quiz from './Quiz.js';

const Lesson = ({selectedInstrument}) => {
    return (
        <>
        <p>This is a {selectedInstrument.name} lesson</p>
        <Slides />
        <Quiz />
        </>
    )
}



export default Lesson;