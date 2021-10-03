import React, {useState, useEffect} from 'react'

function LogInPage({setUser, baseURL}) {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        name: ""
    })

    useEffect(() => {
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        const data = await fetch(`${baseURL}/users`)
        const users = await data.json()
        setUsers(users)
    }

    function login(userName) {
        const user = users.filter(user => user.name === userName)
        setUser(user[0])
        setError(user.length === 0)
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
        login(formData.name)
        setFormData({
            name: ""
        })
    }
    
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <h3>Username:</h3>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name..." required></input>
                <button type="submit" className="submit">Log In</button>
                {error ? <h3 className="error">Username not found</h3> : null}
            </form> 
        </div>
    )
}

export default LogInPage;