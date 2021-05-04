import React from 'react';
import Slide from './Slide.js';
import QuizForm from './QuizForm.js';
import LessonLanding from './LessonLanding.js';

const Lesson = ({selectedInstrument, quizStarted, setQuizStarted, currentSlideIndex, setSlideIndex, inputName, inputAge, lessonStarted, setLessonStarted}) => {

    const finalSlideIndex = selectedInstrument.slides.length - 1;

    const startLesson = () => {
        return(
            setLessonStarted(true)
        )
    };

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
        <div id="welcome-slide-grid" >
            <div className="welcome-slide-border">
        {lessonStarted ? 
        <>
        {quizStarted ? 
        <QuizForm selectedInstrument={selectedInstrument}/> : 
        <div>
        <Slide selectedInstrument={selectedInstrument} 
        currentSlideIndex={currentSlideIndex} 
        finalSlideIndex={finalSlideIndex}
        prev={prev}
        next={next}
        startQuiz={startQuiz}
        /> 
        </div>}
        </> : 
        <LessonLanding inputName={inputName} 
        startLesson={startLesson}
        selectedInstrument={selectedInstrument}
        />}
        </div>
        </div>
    )
}



export default Lesson;