import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile for user with ID: {id}</p>
        </div>
    );
};

export default Profile;
