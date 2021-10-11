import React, {useState, useEffect} from 'react'
import EditUserForm from './EditUserForm'

function ProfilePage({currentUser, setCurrentUser, baseURL}) {
    const [edit, setEdit] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [user, setUser] = useState({
        name: "",
        attempted_quizzes: []
    })
    
    useEffect(() => {
        if (currentUser) {
            fetchUser()
        }
    }, [baseURL, currentUser])

    const fetchUser = async () => {
        const token =  localStorage.getItem('token')
        const configObj = {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        const data = await fetch(`${baseURL}/users/${currentUser.id}`, configObj)
        const user = await data.json()
        setUser(user)
    }

    const deleteUser = async () => {
        const token =  localStorage.getItem('token') 
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        await fetch(`${baseURL}/users/${currentUser.id}`, configObj)
        setCurrentUser(null)
    }

    const attempts = user.attempted_quizzes.map(attempt => {
        return <AttemptedQuiz key={attempt.id} attempt={attempt} />
    })

    const message = attempts.length === 0 ? <h3>You haven't taken any quizzes yet</h3> : null
    const buttionClass = confirm ? "cancel-delete" : "delete-button"
    const buttonText = confirm ? "Cancel" : "Delete Profile"
    const deleteButton = confirm ? <button className="confirm-delete" onClick={deleteUser}>Confirm Delete</button> : null

    const profilePage = currentUser ?
    (
        <div className="profile-page">
            <h1>{`Hello, ${user.name}`}</h1>
            <h2>Attempted Quizzes: </h2>
            <button className={buttionClass} onClick={() => setConfirm(!confirm)}>{buttonText}</button>
            {deleteButton}
            <button className="edit-button" onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit Profile"}</button>
            <div className = "attempt-container">
                {message}
                {attempts}
            </div>
            {edit ? <EditUserForm baseURL={baseURL} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : null}
        </div>
    ) : 
    (
        <h1>Please Log In</h1>
    )

    useEffect (() => {
        if (edit) {
            document.getElementById("edit").scrollIntoView();
        }
    }, [edit])
    
    return (
        <div className="profile-container">
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