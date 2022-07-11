import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      questionText: "Q.1 What is the Capital of UAE?",
      answerOptions: [
        { answerText: "Dhaka", isCorrect: false },
        { answerText: "Dubai", isCorrect: false },
        { answerText: "Abu Dhabi", isCorrect: true },
        { answerText: "India", isCorrect: false },
      ],
    },
    {
      questionText: "Q.2 Have you subscribed to MASHJAMA on youtube?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "Maybe", isCorrect: false },
        { answerText: "No", isCorrect: false },
        { answerText: "Maybe Not", isCorrect: false },
      ],
    },
    {
      questionText: "Q.3 Have you shared my youtube channel to your friends and familly?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "Maybe", isCorrect: false },
        { answerText: "No", isCorrect: false },
        { answerText: "Maybe Not", isCorrect: false },
      ],
    },
    {
      questionText: "Q.4 How many seconds in a year?",
      answerOptions: [
        { answerText: "31456000", isCorrect: false },
        { answerText: "31636900", isCorrect: false },
        { answerText: "31536000", isCorrect: true },
        { answerText: "31976000", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-violet-700 absolute top-1/3 left-1/4 origin-[-50%_50%] p-5 white rounded-3xl">
      {showScore ? (
        <>
          <h1>
            you have scored {score} out of {questions.length}
          </h1>
        </>
      ) : (
        <div>
          <h1>{questions[currentQuestion].questionText}</h1>

          <div className="flex justify-evenly md:items-center">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


//  bg-purple-800 bg-gradient-to-r from-violet-500 to-fuchsia-500 top-20% left-20% pt-20 white rounded w-auto 
// flex justify-evenly md:items-center