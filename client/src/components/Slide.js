import React from 'react';

const Slide = ({selectedInstrument, currentSlideIndex, setSlideIndex, finalSlideIndex}) => {
    const prev = () => {
        if (currentSlideIndex>0) {setSlideIndex(currentSlideIndex - 1)};
    };
    const next = () => {
        if (currentSlideIndex<finalSlideIndex) {setSlideIndex(currentSlideIndex + 1)};
    };

    const jobby = () => {
        console.log('JOBBY!!!!!')
    };

    const currentSlide = selectedInstrument.slides[currentSlideIndex];
    const slideContent = currentSlide.map((paragraph) => {
        return (
            <p>{paragraph}</p>
        )
    });


    return(
        <div>
            {slideContent}
            <div className='prev-next'>
                {(currentSlideIndex > 0)?  
                <span className='prev'onClick={prev} >&lt;&lt;prev</span>:null}
                
                {(currentSlideIndex < finalSlideIndex)?
                <span className='next' onClick={next}>next&gt;&gt;</span>:
                <span className='start-quiz' onClick={jobby}>start quiz</span>}
            </div>
        </div>
    )
}

export default Slide;