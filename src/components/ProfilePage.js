import React, {useState, useEffect} from 'react'

function ProfilePage({currentUser, setCurrentUser, baseURL}) {
    const [user, setUser] = useState({
        name: "",
        attempted_quizzes: []
    })
    useEffect(() => {
        if (currentUser) {
            fetchUser()
        }
    }, [baseURL])

    const fetchUser = async () => {
        const data = await fetch(`${baseURL}/users/${currentUser.id}`)
        const user = await data.json()
        setUser(user)
    }

    const deleteUser = async () => {
        await fetch(`${baseURL}/users/${currentUser.id}`, {method: "DELETE"})
        setCurrentUser(null)
    }

    const attempts = user.attempted_quizzes.map(attempt => {
        return <AttemptedQuiz key={attempt.id} attempt={attempt} />
    })

    const profilePage = currentUser ?
    (
        <div className="profile-page">
            <h1>{`Hello, ${user.name}`}</h1>
            <h2>Attempted Quizzes: </h2>
            <button className="delete-button" onClick={deleteUser}>Delete Profile</button>
            <div className = "attempt-container">
                {attempts}
            </div>
        </div>
    ) : 
    (
        <h1>Please Log In</h1>
    )

    return (
        <div>
            {profilePage}
        </div>
    )
}

function AttemptedQuiz({attempt}) {
    return(
        <div className="attempt-card">
        <h3>{attempt.quiz.name}</h3>
        <h4>Number Correct: {attempt.number_correct}</h4>
        </div>
    )
}

export default ProfilePage;