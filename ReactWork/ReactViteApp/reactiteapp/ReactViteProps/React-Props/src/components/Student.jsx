import React from 'react';
import './student.css'

const Student = (props) => {
    return (
        <div className='page-wrapper'>
            <h1>Student Info</h1>
            <h3>Name: {props.name}</h3>
            <h3>Branch: {props.branch}</h3>
            <h3>Section: {props.section}</h3>
            <h3>Roll_Number: {props.roll_no}</h3>
            <h3>College: {props.college}</h3>
        </div>
    );
}

export default Student;
