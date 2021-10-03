import React from 'react'
import {Link} from 'react-router-dom'

function QuizCard({quiz, user}) {
    const navStyle = {
        color: 'blue',
        "fontWeight": 'bold'
    }
    return (
        <div>
           <h1>{quiz.name}</h1>
           {user ? <Link style={navStyle} to={`/quizzes/${quiz.id}`}>Attempt</Link> : <p>Log in to attempt quiz</p>} 
        </div>
    )
}

export default QuizCard;