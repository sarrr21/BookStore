import { useState } from "react";
import { Link } from 'react-router-dom'; 

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default to 'user'

  const handleRegister = () => {
    // Perform registration logic, for demo purposes, just pass the credentials to parent component
    onRegister({ name, email, password, userType });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-lg p-2 mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-2 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-2 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border rounded-lg p-2 mb-4"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select
          className="w-full border rounded-lg p-2 mb-4"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleRegister} className="w-full bg-blue-500 text-white p-2 rounded-lg">
          Register
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500">Login</Link>
          <span className="mx-2">|</span>
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Register;