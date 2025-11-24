import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <h2 style={{ border: '2px solid black', backgroundColor: 'yellow', color: 'green', height: '30', width: '25', fontFamily: 'sans', fontSize: '40px' }}>Main Layout</h2>
            <nav>
                <Link style={{ fontFamily: 'fantasy', fontSize: '30px' }} to='/login'>Login</Link>
                <br />
                <Link style={{ fontFamily: 'fantasy', fontSize: '30px' }} to='/registration'>Register</Link>
            </nav>
        </div>
    )
}

export default MainLayout
