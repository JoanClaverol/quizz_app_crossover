import React, {useState} from 'react'
import data from '../assets/data'

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showScore, setShowScore] = useState(false)
    const [result, setResult] = useState(0)
    
    const handleAnswerClick = () => {

        const nextQuestion = activeQuestion +1; 
        if(nextQuestion < data.length){ 
        setActiveQuestion(nextQuestion);
    } else {
        setShowScore(true)
    }
    }

  return (
    <div className='quiz'><h1>Quiz</h1>
        {showScore ? ( <>You Scored SOMETHING out of {data.length}</>
        ):(
        <>
        <div className='question-section'>
            <h2>Question {activeQuestion +1} of {data.length}</h2>
        {data[activeQuestion].question}
        </div>
        <div className='answers-section'>
         <button onClick={handleAnswerClick}>{data[activeQuestion].correct_answer}</button>
         {data[activeQuestion].incorrect_answers.map((incorrect_answers)=> <button onClick={handleAnswerClick}>{incorrect_answers}</button>)}
        </div></>)}
    </div>
  )
}

export default Quiz