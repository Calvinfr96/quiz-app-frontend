import React, {useState, useEffect} from 'react'
import QuizCard from './QuizCard'

function QuizIndexPage({baseURL, user}) {
    const [quizzes, setQuizzes] = useState([])

    const fetchQuizzes = async () => {
        const token =  localStorage.getItem('token')
        const configObj = {
            method: "GEt",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const data = await fetch(`${baseURL}/quizzes`, configObj)
        const quizData = await data.json()
        if (!quizData.message) {
            setQuizzes(quizData)
        }
    }

    useEffect(() => {
        fetchQuizzes()
    }, [])

    const quizCards = quizzes.map((quiz) => {
        return <QuizCard key={quiz.id} quiz={quiz} user={user} />
    })

    return (
        <div>
            <p>Welcome to the quiz index page</p>
            {quizCards}
        </div>
    )
}

export default QuizIndexPage;