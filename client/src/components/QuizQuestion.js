import React, { useDebugValue } from 'react';

const QuizQuestion = ({qa}) => {

    const handleAnswer = (event) => {
        console.log(event.target["tf"])
        // console.log(answerInfo)
        // const tf = event.target.tf;
        // if (tf === true) {
        //     return (
        //         console.log("You are correct")
        //     )}
        // else if { 
        //     return (
        //         console.log("You are wrong")
        // )}
        } 

    const answers = qa.answers.map((answerInfo, index) => {
        console.log(answerInfo.status.toString())
        return(  
            <button key={index} tf={answerInfo.status.toString()} onClick={handleAnswer}>{answerInfo.answer}</button>
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