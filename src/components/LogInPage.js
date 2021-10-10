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
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Sign in to Quivia</h2>
                <label>
                    Username:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                </label>
                <label>
                    Password:  
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password..." required></input>
                </label>
                {error ? <h3 className="error">{error}</h3> : null}
                <button type="submit" className="submit">Sign In</button>
            </form> 
        </div>
    )
}

export default LogInPage;