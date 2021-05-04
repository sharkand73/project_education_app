import React from 'react';
import '../App.css';
//import sax_0 from '../images/images.js';

const Slide = ({selectedInstrument, currentSlideIndex, finalSlideIndex, prev, next, startQuiz}) => {

    const currentSlide = selectedInstrument.slides[currentSlideIndex];
    const slideImage = selectedInstrument.images[currentSlideIndex];
    const slideContent = currentSlide.map((paragraph, index) => {
        return (
            <p key={index}>{paragraph}</p>
        )
    });


    return(
        <div>
            <div>
            <img className="instrument-pic" src={require('../images/'+ slideImage).default} alt={selectedInstrument.name} />
            </div >
            <div className="lesson-text">
            {slideContent}
            </div>
            <div className='prev-next'>
                {(currentSlideIndex > 0)?  
                <span className='prev form-submit-button' onClick={prev} >&lt;&lt; prev</span>:null}
                
                {(currentSlideIndex < finalSlideIndex)?
                <span className='next form-submit-button' onClick={next}>next &gt;&gt;</span>:
                <span className='start-quiz form-submit-button' onClick={startQuiz}>start quiz</span>}
            </div>
        </div>
    )
}

export default Slide;