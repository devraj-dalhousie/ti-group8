import React from "react";

const Profile = (props) => {
    return (
        <div>
            <h2>Registration successful</h2>
            <h3>Here are the details:</h3>
            <p><b>First Name: </b>{props.fname}</p>
            <p><b>Last Name: </b>{props.lname}</p>
            <p><b>Email: </b>{props.email}</p>
        </div>
    );
}

export default Profile;