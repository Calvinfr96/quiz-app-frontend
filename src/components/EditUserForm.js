import React, {useState} from 'react'

function EditUserForm({baseURL, currentUser, setCurrentUser}) {
    const [formData, setFormData] = useState({
        name: ""
    })
    const [errors, setErrors] = useState(null)

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
        <div>
           <h1>Edit User Profile</h1>
           <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <button type="submit" className="submit">Edit</button>
                {errors ? <h3 className="error">{`Name ${errors.name[0]}`}</h3> : null}
           </form> 
        </div>
    )
}

export default EditUserForm;