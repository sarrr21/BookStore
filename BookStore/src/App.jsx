import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/register';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (credentials) => {
    // Perform login logic, for demo purposes, just console log
    console.log('Login:', credentials);
    setLoggedInUser(credentials);
  };

  const handleRegister = (credentials) => {
    // Perform registration logic, for demo purposes, just console log
    console.log('Register:', credentials);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
      </Routes>
    </Router>
  );
};

const Home = ({ loggedInUser, setLoggedInUser }) => {
  return (
    <div>
      <h1 className="text-3xl text-center my-4">Welcome to the Authentication App</h1>
      {loggedInUser ? (
        <div>
          <h1 className="text-3xl text-center my-4">Welcome, {loggedInUser.username}!</h1>
          <button onClick={() => setLoggedInUser(null)} className="bg-red-500 text-white p-2 rounded-lg">
            Logout
          </button>
        </div>
      ) : (
        <p className="text-center">Please <a href="/login" className="text-blue-500">Login</a> or <a href="/register" className="text-blue-500">Register</a>.</p>
      )}
    </div>
  );
};

export default App;