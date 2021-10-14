import React from 'react'

function HomePage({user}) {
    const loginPrompt = user ? <p className="login-prompt">Welcome, {user.name}.</p> : 
                               <p className="login-prompt">Please log in or create an account to take a quiz</p>
    return (
        <div className="home-page">
            <div className="home-page-text">
                <p>Welcome to Quivia! The app where you can take quizzes on trivia from various subjects.</p>
                <p>This app was built using a React.js frontend and a Ruby on Rails backend.</p>
                <p>The app is currently loaded with Computer Trivia questions from Open Trivia Database API.</p>
                {loginPrompt}
            </div>
        </div>
    )
}

export default HomePage