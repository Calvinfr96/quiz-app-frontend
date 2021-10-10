import React from 'react'
import {Link} from 'react-router-dom'

function Nav({logOut}) {
    const navStyle = {
        color: 'blue',
        "fontWeight": 'bold'
    }
    return (
        <nav>
            <ul className="nav-links">
                    <Link style={navStyle} to="/"><li>Home</li></Link>
                    <Link style={navStyle} to='/login'><li>Log In</li></Link>
                    <Link style={navStyle} to="/" onClick={logOut}><li>Log Out</li></Link>
                    <Link style={navStyle} to='/signup'><li>Sign Up</li></Link>
                    <Link style={navStyle} to='/profile'><li>Profile</li></Link>
                    <Link style={navStyle} to="/quizzes"><li>Quizzes</li></Link>
            </ul> 
        </nav>
    )
}

export default Nav;