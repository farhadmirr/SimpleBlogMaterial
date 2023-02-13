import { useState } from 'react';
import axios from 'axios';

function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);

    try {
      const res = await axios.post('https://your-api-endpoint.com/login', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
    } catch (err) {
      setError(err.response.data.message);
    }

    setIsLoading(false);
  };

  const signUp = async (email, password) => {
    setIsLoading(true);

    try {
      await axios.post('https://your-api-endpoint.com/signup', {
        email,
        password
      });
    } catch (err) {
      setError(err.response.data.message);
    }

    setIsLoading(false);
  };

  return { isLoading, error, login, signUp };
}

export default useAuth;
