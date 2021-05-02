import React from 'react';
//const imgPath = '../images/sax_0.png';
const imgName = 'sax_0.png';
//import sax_0 from require(imgPath);
//import sax_0 from '../images/images.js';

const Slide = ({selectedInstrument, currentSlideIndex, finalSlideIndex, prev, next, startQuiz}) => {
    // const prev = () => {
    //     if (currentSlideIndex>0) {setSlideIndex(currentSlideIndex - 1)};
    // };
    // const next = () => {
    //     if (currentSlideIndex<finalSlideIndex) {setSlideIndex(currentSlideIndex + 1)};
    // };

    // const jobby = () => {
    //     console.log('JOBBY!!!!!')
    // };

    const currentSlide = selectedInstrument.slides[currentSlideIndex];
    const slideImage = selectedInstrument.images[currentSlideIndex];
    const slideContent = currentSlide.map((paragraph) => {
        return (
            <p>{paragraph}</p>
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