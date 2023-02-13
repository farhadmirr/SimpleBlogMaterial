import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import useAuth from '../Hooks/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, error, login } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }}>
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '1rem'
      }}>
        {error && <p>{error}</p>}
        <h2>Login</h2>
        <TextField
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;