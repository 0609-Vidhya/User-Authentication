import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Route = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return children;
  }
  else{
    return<Navigate to='/login'/>
  }

  
};

export default Route;



