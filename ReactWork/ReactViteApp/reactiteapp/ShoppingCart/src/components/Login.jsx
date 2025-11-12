import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Login({loginData}) {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    function getData() {
        const data = {
            Email,
            Password
        }
        loginData(data);
    }
    return (
        <div>
            <h2 style={{ backgroundColor: 'red', color: 'white' }}>Login Form</h2>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={getData} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
