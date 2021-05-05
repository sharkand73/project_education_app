import React, {useState} from 'react';
import '../App.css';

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
            <button className="quiz-buttons" key={index} value={answerInfo.status.toString()} onClick={handleAnswer}>{answerInfo.answer}</button>
        )
    })

    return (
        <>
        <h3 className="question-padding">{question}</h3>
        {answers}
        {currentMessage === "You are correct!" ? <p className = "correct-color">{currentMessage}</p> : <p className = "wrong-color">{currentMessage}</p>}
        </>
    )
}



export default QuizQuestion