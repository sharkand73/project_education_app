import React from 'react';

const QuizQuestion = ({qa}) => {

    const answers = qa.answers.map((answerInfo, index) => {
        return(
            <button key={index} status={answerInfo.status}>{answerInfo.answer}</button>
        )
    })

    return (
        <>
        <h5>{qa.question}</h5>
        {answers}
        </>
    )
}



export default QuizQuestion