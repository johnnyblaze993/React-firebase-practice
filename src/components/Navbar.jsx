<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Home } from '@mui/icons-material';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signOut = async () => {
    await auth.signOut();
    navigate('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {' '}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {' '}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  navigate('/');
                }}
              >
                <Home />
              </IconButton>
              {user ? (
                <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                    to="/makePost"
                  >
                    Make post
                  </Link>
                </Typography>
              ) : null}
              {user ? (
                <Typography
                  variant="p"
                  component="div"
                  sx={{ flexGrow: 1, mr: 3 }}
                >
                  News
                </Typography>
              ) : null}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <>
                {user ? 'Welcome back,' : null}
                <br />
                {user ? user.displayName : null}

                {user ? (
                  <img
                    src={user?.photoURL || ''}
                    alt=""
                    width={20}
                    height={20}
                  />
                ) : null}
              </>
              {
                // If user is logged in, show logout button
                user ? (
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                    onClick={signOut}
                  >
                    logout
                  </Link>
                ) : (
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                    to="/login"
                  >
                    login
                  </Link>
                )
              }
            </Box>
          </Box>
        </Toolbar>{' '}
      </AppBar>
    </Box>
  );
}
>>>>>>> Stashed changes
