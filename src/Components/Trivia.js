import React, { useState } from 'react';
import data from '../assets/data';

const TriviaApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = data[currentQuestionIndex];

  const handleAnswerClick = (answer) => {
    setShowAnswer(true);//This line updates the value of showAnswer to true.
    if (answer === currentQuestion.correct_answer) {
      setScore(score + 1);//checks if the answer passed to the function is equal to the correct answer for the current question, if the previous condition is true, this  updates the value of score by adding 1 to it.
    }
  };

  //this is called when the user clicks the "Next" button.
  const handleNextClick = () => {
    setShowAnswer(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < data.length ? (//hecks if currentQuestionIndex is less than the length of the data array. If the condition is true, the code inside the parentheses is executed.
        <>
          <h3>Question: {currentQuestion.question}</h3>
          {!showAnswer ? (//this renders a heading with the text "Question: " followed by the question for the current question
            <>
              <button onClick={() => handleAnswerClick(currentQuestion.correct_answer)}>{currentQuestion.correct_answer}</button>
              {currentQuestion.incorrect_answers.map((answer) => (
                <button onClick={() => handleAnswerClick(answer)}>{answer}</button>
              ))}
            </>
          ) : (
            <>
              <p>{currentQuestion.correct_answer === currentQuestion.incorrect_answers[0] ? "Incorrect" : "Correct"}</p>
              <button onClick={handleNextClick}>Next</button>
            </>
          )}
        </>
      ) : (
        <>
          <p>You scored {score} out of {data.length}</p>
        </>
      )}
    </div>
  );
};

export default TriviaApp;