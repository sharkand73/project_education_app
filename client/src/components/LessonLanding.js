import React from 'react';


const LessonLanding = ({inputName, startLesson, selectedInstrument}) => {
    
    
    return(
        <div>
        <h2>Hi {inputName? <span>{inputName}</span> : <span>there</span>}, 
        welcome to the {selectedInstrument.name} Lesson!</h2>
        <h3>Click the button below when you are ready to start!</h3>
        <button className="form-submit-button" type="button" onClick={startLesson}>Start Lesson</button>
        </div>
    )
}

export default LessonLanding