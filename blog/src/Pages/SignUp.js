import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../Hooks/useAuth';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, error, signup } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    await signup(email, password);
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
        <h2>SignUp</h2>

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

export default Signup;