import React from 'react'
import {Link} from 'react-router-dom'

function QuizCard({quiz, user}) {
    return (
        <div className="quiz-card">
           <h1>{quiz.name}</h1>
           {user ? <Link className="quiz-link" to={`/quizzes/${quiz.id}`}>Attempt</Link> : <p>Log in to attempt quiz</p>} 
        </div>
    )
}

export default QuizCard;