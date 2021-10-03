import React from 'react'
import {Link} from 'react-router-dom'

function QuizCard({quiz}) {
    const navStyle = {
        color: 'blue',
        "fontWeight": 'bold'
    }
    return (
        <div>
           <h1>{quiz.name}</h1>
           <Link style={navStyle} to={`/quizzes/${quiz.id}`}>Attempt</Link> 
        </div>
    )
}

export default QuizCard;