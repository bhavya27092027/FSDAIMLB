import React from 'react'
import { useState } from 'react';

function Registration({ regData }) {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    async function getData(e) {
        e.preventDefault();
        /* alert("Hii! " + Name);
        alert("Your Email is ! " + Email);
        alert("Your Password is ! " + Password); */

        const data = {
            Name,
            Email,
            Password
        }
        // regData(data);
        /* console.log(data) */

        const response = await fetch('http://172.16.43.149:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        const res = await response.json();
        alert(res.msg);
    }
    return (
        <div>
            <h2 style={{ backgroundColor: 'blue', color: 'white' }}>Registration Form</h2>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
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
                <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
            </form>
        </div>
    )
}

export default Registration
