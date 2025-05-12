import React, { useState } from 'react';
import { createUser } from '../services/userService';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [user, setUser] = useState({ name: '', email: '', phoneNumber: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUser(user).then(() => navigate('/'));
  };

  return (
    <div className="container mt-4">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" className="form-control" value={user.phoneNumber} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;