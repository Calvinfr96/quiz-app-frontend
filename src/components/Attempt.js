import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Question from './Question';

function Attempt({baseURL}) {
    const [quiz, setQuiz] = useState({})
    const {id} = useParams()

    const fetchQuiz = async () => {
        const data = await fetch(`${baseURL}/quizzes/${id}`)
        const quizData = await data.json()
        setQuiz(quizData)
    }

    useEffect(() => {
        fetchQuiz()
    },[])

    return (
        <div>
            <h1>Attempt Page</h1>
        </div>
    )
}

export default Attempt;