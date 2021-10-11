import React from 'react'

function Question({title, subtitle, question, answerQuestion}) {
    function handleAsnwer(isCorrect) {
        answerQuestion(isCorrect)
    }
    const answers = question.answers.map((answer, index) => {
        const isCorrect = index === question.correct_index
        return <button key={answer} onClick={() => handleAsnwer(isCorrect)}>{answer}</button>
    })
    return (
        <div className="question">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{question.prompt}</h3>
            {answers}
        </div>
    )
}

export default Question;