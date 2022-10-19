import React from 'react';

const Login = () => {
<<<<<<< Updated upstream
  return <div>login</div>;
=======
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
>>>>>>> Stashed changes
};

export default Login;
