// src/components/EditUser.jsx
import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../services/userService';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const [user, setUser] = useState({ name: '', email: '', phoneNumber: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(id).then(res => setUser(res.data));
  }, [id]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(id, user).then(() => navigate('/'));
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
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
        <button className="btn btn-primary">Update User</button>
      </form>
    </div>
  );
}

export default EditUser;
