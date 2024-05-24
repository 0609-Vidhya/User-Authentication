import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(''); 
 const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
    //   console.log('Login');
      setLoginError(''); 
      navigate('/dashboard');
    } else {
      setLoginError('Invalid username or password!'); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
        <label htmlFor="username" style={{ fontSize: '16px' }}>
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '250px', padding: '10px', border: '1px solid grey', borderRadius: '5px', margin: '10px' }}
        />
        <label htmlFor="password" style={{ fontSize: '16px' }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '250px', padding: '10px', border: '1px solid grey', borderRadius: '5px', margin: '10px' }}
        />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>} 
                <button type="submit" style={{ width: '100px', padding: '10px', marginLeft: '50px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
