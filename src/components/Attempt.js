import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Question from './Question';

function Attempt({baseURL}) {
    const [quiz, setQuiz] = useState({
        name: "",
        questions: []
    })
    const [questionIndex, setQuestionIndex] = useState(0)
    const [score, setScore] = useState(0)
    const {id} = useParams()
    const questions = quiz.questions
    const currentQuestion = questions[questionIndex]

    const fetchQuiz = async () => {
        const data = await fetch(`${baseURL}/quizzes/${id}`)
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