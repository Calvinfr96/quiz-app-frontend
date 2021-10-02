import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'blue',
        "font-weight": 'bold'
    }
    return (
        <nav>
           <ul className="nav-links">
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/quizzes"><li>Quizzes</li></Link>
           </ul> 
        </nav>
    )
}

export default Nav;