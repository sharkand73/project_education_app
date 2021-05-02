import React, {useState} from 'react';
// The following function will be used to shuffle the answers.

const QuizQuestion = ({question, answersArray}) => {

    const [currentMessage, setCurrentMessage] = useState("")

    const handleAnswer = (event) => {
        console.log(event.target.value)
        const tf = event.target.value;
        if (tf === "true") {
            setCurrentMessage("You are correct!")}
        else { 
            setCurrentMessage("Try again")}
        }
    
    const answers = answersArray.map((answerInfo, index) => {
        // console.log(answerInfo.status.toString())
        return(  
            <button key={index} value={answerInfo.status.toString()} onClick={handleAnswer}>{answerInfo.answer}</button>
        )
    })

    return (
        <>
        <h5>{question}</h5>
        {answers}
        <p>{currentMessage}</p>
        </>
    )
}



export default QuizQuestion