import React from 'react'
import './profile.css' ;

const Profile = () => {
    return (
        <div>
            <DIV className="parent">
                <h2 style={{ color: "red" }}>
                    Welcome to my Profile Page
                </h2>
                <img src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png" alt="profile pic" style={{borderRadius:'50%'}} height={200} width={200} />
                <h2>Name: Bhavya</h2> 
                <h2>Roll No: 10068</h2> 
                <h2>Branch: AIML</h2> 
                <h2>Section: B</h2> 
                <h2>College: ABES ENGINEERING COLLEGE</h2> 
            </DIV>
        </div>
    )
}

export default Profile  // type: module
