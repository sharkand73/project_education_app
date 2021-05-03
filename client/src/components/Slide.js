import React from 'react';
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
            <img src={require('../images/'+ slideImage).default} alt='saxes' />
            </div>
            {slideContent}
            <div className='prev-next'>
                {(currentSlideIndex > 0)?  
                <span className='prev'onClick={prev} >&lt;&lt;prev</span>:null}
                
                {(currentSlideIndex < finalSlideIndex)?
                <span className='next' onClick={next}>next&gt;&gt;</span>:
                <span className='start-quiz' onClick={startQuiz}>start quiz</span>}
            </div>
        </div>
    )
}

export default Slide;