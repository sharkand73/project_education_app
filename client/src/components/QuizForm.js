import React, {useState} from 'react';
import QuizQuestion from './QuizQuestion.js';

const QuizForm = ({selectedInstrument}) => {

    // const [selectedAnswer, setSelectedAnswer]

    // const handleAnswer = (event) => {
    //     if (event.target.status === true) {
    //         return (
    //             <p>You are correct!</p>
    //         )}
    //     else {
    //         return (
    //             <p>Try again</p>
    //     )}
    //     }

    const questionList = selectedInstrument.quiz.map((qa, index) => {
        return(
            <li>
            <QuizQuestion qa={qa} key={index} />

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