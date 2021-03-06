import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function EditUserForm({baseURL, currentUser, setCurrentUser}) {
    const [formData, setFormData] = useState({
        name: ""
    })
    const [errors, setErrors] = useState(null)
    const history = useHistory()

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const editUser = async () => {
        const token =  localStorage.getItem('token')
        const configObj = {
            method: "PATCH",
            headers: {
                'Content-Type':'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                ...formData
            })
        }

        const data = await fetch(`${baseURL}/users/${currentUser.id}`, configObj)
        const newUser = await data.json()
        if (!newUser.errors) {
            setCurrentUser(newUser)
            history.go(0)
        }
        setErrors(newUser.errors)
    }

    function handleSubmit(event) {
        event.preventDefault()
        editUser()
        setFormData({
            name: ""
        })
    }
    return (
        <div id="edit" className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Edit User Profile</h2>
                <label>
                    Username:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                </label>
                {errors ? <h3 className="error">{`Name ${errors.name[0]}`}</h3> : null}
                <button type="submit" className="submit">Edit</button>
            </form> 
        </div>
    )
}

export default EditUserForm;