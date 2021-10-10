import React, {useState} from 'react'

function NewUserFrom({baseURL, setCurrentUser}) {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        password_confirmation: ""
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

    const addUser = async () => {
        const configObj = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                ...formData
            })
        }

        const data = await fetch(`${baseURL}/users`, configObj)
        const newUser = await data.json()
        console.log(newUser)
        setCurrentUser(newUser.user)

        if (newUser.errors) {
            if (newUser.errors.name) {
                setErrors(`Name ${newUser.errors.name[0]}`)
            } else if (newUser.errors.password_confirmation) {
                setErrors("Passwords don't match")
            }
        } else {
            setErrors(null)
            localStorage.setItem('token', newUser.jwt) 
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        addUser()
        setFormData({
            name: "",
            password: "",
            password_confirmation: ""
        })
    }

    return (
        <div>
           <h1>Create User Profile</h1>
           <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password..." required></input>
                <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Confirm Password..." required></input>
                <button type="submit" className="submit">Add</button>
                {errors ? <h3 className="error">{`${errors}`}</h3> : null}
           </form> 
        </div>
    )
}

export default NewUserFrom;