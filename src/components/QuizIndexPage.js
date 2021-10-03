import React, {useState, useEffect} from 'react'

function QuizIndexPage({baseURL}) {
    const [quizzes, setQuizzes] = useState([])

    const fetchQuizzes = async () => {
        const data = await fetch(`${baseURL}/quizzes`)
        const quizData = await data.json()
        setQuizzes(quizData)
    }

    useEffect(() => {
        fetchQuizzes()
    })
    
    return (
        <div>
            <p>Welcome to the quiz index page</p>
        </div>
    )
}

export default QuizIndexPage;