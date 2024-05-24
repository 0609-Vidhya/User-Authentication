import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('https://jsonplaceholder.org/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (response.ok) {
      // console.log('Register');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password); 

      setIsLoggedIn(true); 
    } else {
      console.error('Registration failed');
    }
  }


  const handleLoginClick = () => {
    navigate('/login'); 
  };


  return (

    <div>
      {isLoggedIn ? (
         <div style={{textAlign:'center'}}>
         <h1 style={{color:'green'}}>Login Successful!</h1>
         <button onClick={handleLoginClick}>Go to Login Screen</button>  
                </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' ,alignItems:'center'}}>
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
          <button type="submit" style={{ width: '100px', padding: '10px', marginLeft: '50px' }}>
            Register
          </button>
        </form>
      )}
    </div>
  )
}

export default Register
