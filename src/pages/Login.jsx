import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate('/');
  };

  return (
    <div>
      <h1>Sign in with Google account</h1>
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Login to Google
      </Button>
    </div>
  );
};

export default Login;
