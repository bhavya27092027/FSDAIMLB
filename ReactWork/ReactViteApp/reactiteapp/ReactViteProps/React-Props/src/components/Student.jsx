import React from 'react';
import './student.css'

const Student = ({ data }) => {
    return (
        <div className='page-wrapper'>
            <h1>Student Info</h1>
            <img style={{ borderRadius: "50%" }} src="data.pic" height={200} width={200} alt="Profile Image" />
            <h3>Name: {data.name}</h3>
            <h3>Branch: {data.branch}</h3>
            <h3>Section: {data.section}</h3>
            <h3>Roll_Number: {data.roll_no}</h3>
            <h3>College: {data.college}</h3>
        </div>
    );
}

export default Student;
