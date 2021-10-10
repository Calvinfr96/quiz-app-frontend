import React from 'react'
import {Link} from 'react-router-dom'

function Nav({user, logOut}) {
    const navStyle = {
        color: 'blue',
        "fontWeight": 'bold'
    }

    const navLinks = user? (
        <ul className="nav-links">
            <Link style={navStyle} to="/"><li>Home</li></Link>
            <Link style={navStyle} to="/" onClick={logOut}><li>Log Out</li></Link>
            <Link style={navStyle} to='/profile'><li>Profile</li></Link>
            <Link style={navStyle} to="/quizzes"><li>Quizzes</li></Link>
        </ul> 
    ) : (
        <ul className="nav-links">
            <Link style={navStyle} to="/"><li>Home</li></Link>
            <Link style={navStyle} to='/login'><li>Log In</li></Link>
            <Link style={navStyle} to='/signup'><li>Sign Up</li></Link>
        </ul> 
    )
    return (
        <nav>
            {navLinks}
        </nav>
    )
}

export default Nav;