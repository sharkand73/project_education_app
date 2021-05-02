import React from 'react';
import QuizQuestion from './QuizQuestion.js';

const QuizForm = ({selectedInstrument}) => {

    const questionList = selectedInstrument.quiz.map((qa) => {
        return(
            <li>
            <QuizQuestion qa={qa} />
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