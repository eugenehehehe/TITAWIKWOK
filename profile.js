import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="user-account-container">
      <div className="user-account-header">
        <h1>Eugene</h1>
        <button>Edit</button>
      </div>
      <div className="user-account-body">
        <form>
          <label htmlFor="grade">
            Grade
            <p>11</p>
          </label>
          <label htmlFor="email">
            Email Address
            <p> eugenesr@gmail.com</p>
          </label>
          <label htmlFor="location">
            Location
            <p>Malang, Jawa Timur</p>
          </label>
          <label htmlFor="phoneNumber">
            Phone Number
            <p>62827469817</p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Profile;