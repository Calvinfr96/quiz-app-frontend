import React, {useState} from 'react'

function NewUserFrom({baseURL}) {
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
        setErrors(newUser.errors)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addUser()
        setFormData({
            name: ""
        })
    }

    return (
        <div>
           <h1>Create User Profile</h1>
           <form onSubmit={handleSubmit}>
                <h3>Name:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <button type="submit" className="submit">Add</button>
                {errors ? <h3 className="error">{`Name ${errors.name[0]}`}</h3> : null}
           </form> 
        </div>
    )
}

export default NewUserFrom;