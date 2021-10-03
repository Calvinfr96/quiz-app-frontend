import React from 'react'

function QuizCard({quiz}) {
    return (
        <div>
           <h1>{quiz.name}</h1>
           <button>Attempt</button> 
        </div>
    )
}

export default QuizCard;