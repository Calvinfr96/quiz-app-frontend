import React, {useState} from 'react'

function LogInPage({setUser, baseURL}) {
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })

const login = async () => {
    const configObj = {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            ...formData
        })
    }

    const data = await fetch(`${baseURL}/login`, configObj)
    const currentUser = await data.json()
    setUser(currentUser.user)

    if (currentUser.error) {
        setError(currentUser.error)
    } else {
        setError(null)
        localStorage.setItem('token', currentUser.jwt) 
    }
}

    function handleChange(event) {
        const name = event.target.name
        let value = event.target.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        login()
        setFormData({
            name: "",
            password: ""
        })
    }
    
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <h3>Username:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password..." required></input>
                <button type="submit" className="submit">Log In</button>
                {error ? <h3 className="error">{error}</h3> : null}
            </form> 
        </div>
    )
}

export default LogInPage;