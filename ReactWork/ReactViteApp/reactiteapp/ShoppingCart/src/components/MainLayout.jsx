import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <h2 style={{ backgroundColor: 'yellow', color: 'green' }}>Main Layout</h2>
            <nav>
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/registration'>Register</Link> 
            </nav>
        </div>
    )
}

export default MainLayout
