import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ loginData }) {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function getData(e) {
        e.preventDefault();

        const enteredloginData = { Email, Password };

        if (loginData && Email === loginData.Email && Password === loginData.Password) {
            console.log("Login successful:", enteredloginData);
            navigate('/dashboard');
            setError('');
        } else {
            setError('Invalid email or password');
        }
    }

    return (
        <div>
            <h2 style={{ backgroundColor: 'red', color: 'white' }}>Login Form</h2>
            <form onSubmit={getData}>
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="emailInput"
                        aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        type="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="passwordInput"
                    />
                </div>
                <button type="submit" onClick={getData} className="btn btn-primary">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Login;