import React from 'react';
import '../App.css';
import QuizQuestion from './QuizQuestion.js';
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const QuizForm = ({selectedInstrument, returnClick}) => {

    const questionList = selectedInstrument.quiz.map((qa, index) => {
        let answersArray = qa.answers;
        let question = qa.question;
        shuffleArray(answersArray);
        return(
            <li>
            <QuizQuestion question={question} answersArray={answersArray} key={index}/>

            </li>
        )
    })

    return(
        <>
        <ul className="question-text">
        {questionList}
        </ul>
        <button className="form-submit-button" onClick={() => {returnClick()}} >Return to welcome page</button>
        </>
    )
}


export default QuizForm; 