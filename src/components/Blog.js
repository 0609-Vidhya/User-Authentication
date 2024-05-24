import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Blog() {
  const navigate = useNavigate()
  return (
    <div className="container" style={{ display: 'flex' }}>
    <div
      style={{
        width: '25%',
        background: 'skyblue',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <nav style={{ float: 'left' }}>
        <ul style={{ listStyleType: 'none', margin: '20px 0' }}>
          <li>
            <a href="/dashboard">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <button
        style={{
          padding: '10px',
          fontSize: '18px',
        }}
        onClick={()=>{navigate('/login')}}
      >
        Logout
      </button>
    </div>
    <div className="content" style={{marginLeft:'20px'}}>
      <h2>This is Blog Page</h2>
    </div>
  </div>
  )

}
