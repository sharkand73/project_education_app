import React from 'react';

const QuizQuestion = ({qa}) => {

    const handleAnswer = (event) => {
        // console.log(answerInfo)
        // const tf = event.target.getAttribute("status");
        const tf = event.status;
        if (tf === "true") {
            return (
                <p>You are correct!</p>
            )}
        else {
            return (
                <p>Try again</p>
        )}
        } 

    const answers = qa.answers.map((answerInfo, index) => {
        // console.log(answerInfo.status)
        return(  
            <button key={index} status={answerInfo.answer.status} onClick={handleAnswer}>{answerInfo.answer}</button>
        )
    })

    return (
        <>
        <h5>{qa.question}</h5>
        {answers}
        <p>{handleAnswer}</p>
        </>
    )
}



export default QuizQuestion