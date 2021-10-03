import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'blue',
        "fontWeight": 'bold'
    }
    return (
        <nav>
           <ul className="nav-links">
                <Link style={navStyle} to='/login'><li>Log In</li></Link>
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/quizzes"><li>Quizzes</li></Link>
           </ul> 
        </nav>
    )
}

export default Nav;