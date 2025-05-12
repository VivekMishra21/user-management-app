import React, { useEffect, useState } from 'react';
import {
  getAllUsers, deleteUser,
  findByPhoneNumber, findByName,
  getTodayRegisteredUsers
} from '../services/userService';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchPhone, setSearchPhone] = useState('');
  const [searchName, setSearchName] = useState('');

  const fetchAllUsers = () => {
    getAllUsers().then(res => setUsers(res.data));
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  const handlePhoneSearch = () => {
    findByPhoneNumber(searchPhone).then(res => {
      setUsers([res.data]);
    }).catch(err => {
      alert("User not found with this phone number");
    });
  };

  const handleNameSearch = () => {
    findByName(searchName).then(res => {
      if (res.data) setUsers([res.data]);
      else alert("No user found with this name");
    });
  };

  const handleTodayUsers = () => {
    getTodayRegisteredUsers().then(res => setUsers(res.data));
  };

  return (
    <div className="container mt-4">
      <div className="mb-3 d-flex flex-wrap gap-2">
        <div className="col-12 col-md-auto">
          <input
            type="text"
            placeholder="Search by phone"
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-auto">
          <button className="btn btn-info me-3" onClick={handlePhoneSearch}>Search</button>
        </div>

        <div className="col-12 col-md-auto">
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-auto">
          <button className="btn btn-info me-3" onClick={handleNameSearch}>Search</button>
        </div>

        <div className="col-12 col-md-auto">
          <button className="btn btn-success me-3" onClick={handleTodayUsers}>Today's Registered</button>
        </div>
        <div className="col-12 col-md-auto">
          <button className="btn btn-secondary me-3" onClick={fetchAllUsers}>Show All</button>
        </div>
        <div className="col-12 col-md-auto">
          <Link to="/add" className="btn btn-primary me-3">Add User</Link>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
