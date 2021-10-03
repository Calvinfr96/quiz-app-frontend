import React, {useState, useEffect} from 'react'
import QuizCard from './QuizCard'

function QuizIndexPage({baseURL}) {
    const [quizzes, setQuizzes] = useState([])

    const fetchQuizzes = async () => {
        const data = await fetch(`${baseURL}/quizzes`)
        const quizData = await data.json()
        setQuizzes(quizData)
    }

    useEffect(() => {
        fetchQuizzes()
    }, [])

    const quizCards = quizzes.map((quiz) => {
        return <QuizCard key={quiz.id} quiz={quiz} />
    })

    return (
        <div>
            <p>Welcome to the quiz index page</p>
            {quizCards}
        </div>
    )
}

export default QuizIndexPage;