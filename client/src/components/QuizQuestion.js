import React, {useState} from 'react';

const QuizQuestion = ({qa}) => {

    const [currentMessage, setCurrentMessage] = useState("")

    const handleAnswer = (event) => {
        console.log(event.target.value)
        const tf = event.target.value;
        if (tf === "true") {
            setCurrentMessage("You are correct!")}
        else { 
            setCurrentMessage("Try again")}
        }

    const answers = qa.answers.map((answerInfo, index) => {
        // console.log(answerInfo.status.toString())
        return(  
            <button key={index} value={answerInfo.status.toString()} onClick={handleAnswer}>{answerInfo.answer}</button>
        )
    })

    return (
        <>
        <h5>{qa.question}</h5>
        {answers}
        <p>{currentMessage}</p>
        </>
    )
}



export default QuizQuestion