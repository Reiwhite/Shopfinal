import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", { FullName, Email, Password, Phone, Address });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert("Error registering");
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Register</h2>
    <form onSubmit={handleRegister} className="w-50 mx-auto p-4 border rounded shadow">
        <div className="mb-3">
            <label htmlFor="FullName" className="form-label">Full Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="FullName" 
                placeholder="Enter your full name" 
                value={FullName} 
                onChange={(e) => setFullName(e.target.value)} 
                required 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input 
                type="Email" 
                className="form-control" 
                id="Email" 
                placeholder="Enter your Email" 
                value={Email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input 
                type="Password" 
                className="form-control" 
                id="Password" 
                placeholder="Enter your Password" 
                value={Password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="Phone" className="form-label">Phone</label>
            <input 
                type="Phone" 
                className="form-control" 
                id="Phone" 
                placeholder="Enter your Phone" 
                value={Phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
            />
        </div>
        <div className="mb-3">
            <label htmlFor="Address" className="form-label">Address</label>
            <input 
                type="Address" 
                className="form-control" 
                id="Address" 
                placeholder="Enter your Address" 
                value={Address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
    </form>
</div>

  );
}

export default Register;
