import React from 'react';
import QuizQuestion from './QuizQuestion.js';

const QuizForm = ({selectedInstrument}) => {

    const questionList = selectedInstrument.quiz.map((qa, index) => {
        return(
            <li>
            <QuizQuestion qa={qa} key={index}/>
            </li>
        )
    })

    return(
        <>
        <ul>
        {questionList}
        </ul>
        </>
    )
}


export default QuizForm; 