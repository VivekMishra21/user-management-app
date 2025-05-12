import React from "react";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
      
        <span
          className="navbar-brand mx-auto text-white fw-bold"
          style={{ fontSize: "24px" }}
        >
          User Management System
        </span>
      </div>
    </nav>
  );
}
