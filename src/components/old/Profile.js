import React from 'react';
import profPic from '../images/profile.jpg'

function Profile() {
    return (
        <div className="container">
            <img className="profileImg" src={profPic} alt="profile"></img>
        </div>
    )
}

export default Profile;