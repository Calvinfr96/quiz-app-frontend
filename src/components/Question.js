import React from 'react'

function Question({title, question, answerQuestion}) {
    function handleAsnwer(isCorrect, index) {
        answerQuestion(isCorrect)
    }
    const answers = question.answers.map((answer, index) => {
        const isCorrect = index === question.correct_index
        return <button key={answer} onClick={() => handleAsnwer(isCorrect)}>{answer}</button>
    })
    return (
        <div>
            <h1>{title}</h1>
            <h2>{question.prompt}</h2>
            {answers}
        </div>
    )
}

export default Question;