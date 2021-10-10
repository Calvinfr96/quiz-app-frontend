import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Question from './Question';

function Attempt({baseURL, user}) {
    const [quiz, setQuiz] = useState({
        name: "",
        questions: []
    })
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const {id} = useParams()
    const questions = quiz.questions
    const currentQuestion = questions[questionIndex]
    const finished = questionIndex === questions.length && questions.length !== 0
    const grade = (score / questions.length) > 0.7

    const fetchQuiz = async () => {
        const token =  localStorage.getItem('token')
        const configObj = {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const data = await fetch(`${baseURL}/quizzes/${id}`, configObj)
        const quizData = await data.json()
        setQuiz(quizData)
    }

    useEffect(() => {
        fetchQuiz()
    },[])

    function answerQuestion(correct) {
        if (questionIndex < questions.length) {
            setQuestionIndex(questionIndex => questionIndex + 1)
        } else {
            setQuestionIndex(null)
        }
        if (correct) {
            setScore(score => score + 1)
        }
    }

    function submitAttempt() {
        const token =  localStorage.getItem('token')
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                number_correct: score,
                "passed?": grade,
                quiz_id: id,
                user_id: user.id
            })
        }

        fetch(`${baseURL}/attempts`, configObj)
    }

    useEffect(() => {
        if (finished) {
            submitAttempt()
        }
    }, [finished])


    return (
        <div>
            {currentQuestion ? (
                <Question title={quiz.name} question={currentQuestion} answerQuestion={answerQuestion} />
            ) : (
                <div>
                    <h1>Quiz Finished!</h1>
                    <h2>Score: {score}</h2>
                </div>
            )}
        </div>
    )
}

export default Attempt;