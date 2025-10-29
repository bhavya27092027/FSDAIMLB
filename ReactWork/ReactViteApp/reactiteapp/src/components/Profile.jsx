/* import React from 'react';
import './Profile.css';

const ProfileDetails = ({ name, roll, branch, section, college }) => (
    <div className="profile-details">
        <h2>Name: {name}</h2>
        <h2>Branch: {branch}</h2>
        <h2>Section: {section}</h2>
        <h2>Roll No: {roll}</h2>
        <h2>College: {college}</h2>
    </div>
);

const Profile = () => {
    return (
        <section className="profile-container">
            <h2 className="welcome-text">Welcome to my Profile Page</h2>
            <img
                src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
                alt="profile pic"
                className="profile-pic"
            />
            <ProfileDetails
                name="Bhavya Jain"
                branch="AIML"
                section="B"
                roll="2300320310068"
                college="ABES ENGINEERING COLLEGE"
            />
        </section>
    );
};

export default Profile; */





import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="page-wrapper">
            <div className="parent">
                <h2 style={{ color: "red" }}>
                    Welcome to my Profile Page
                </h2>
                <img
                    src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
                    alt="profile pic"
                    style={{ borderRadius: '50%' }}
                    height={200}
                    width={200}
                />
                <h2>Name: Bhavya Jain</h2>
                <h2>Branch: AIML</h2>
                <h2>Section: B</h2>
                <h2>Roll No: 2300320310068</h2>
                <h2>College: ABES ENGINEERING COLLEGE</h2>
            </div>
        </div>
    );
};

export default Profile;