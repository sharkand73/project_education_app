import React from 'react';

const LessonLanding = ({inputName, startLesson, selectedInstrument}) => {
    
    return(
        <div>
        <h3>Hi {inputName? <span>{inputName}</span> : <span>there</span>}, 
        welcome to the {selectedInstrument.name} Lesson!</h3>
        <p>Click the button below when you are ready to start!</p>
        <button type="button" onClick={startLesson}>Start Lesson</button>
        </div>
    )
}

export default LessonLanding