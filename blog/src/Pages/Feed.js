import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';



function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://63ea05333363c870035fb62d.mockapi.io/articles', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(res.data)
      setPosts(res.data);
    };

    fetchData();
  }, []);
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Feed</h1>
      {posts.map(post => (
        <div key={post.id} style={styles.postContainer}>
          <h2 style={styles.postTitle}>{post.title}</h2>
          <p style={styles.postBody}>{post.body}</p>
        </div>
      ))}
      <Button variant="contained" style={{marginTop:'10px',marginBottom:'10px'}}>Go Back To Home</Button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(to bottom right, #00b0ff, #00b0ff)',
    height: '100vh',
    paddingTop: '10%',
    maxHeight:'100%',
    overflowY:"auto",
  },
  header: {
    color: '#fff'
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginTop: 20,
    padding: 20,
    width: '60%'
  },
  postTitle: {
    fontWeight: 'bold'
  },
  postBody: {
    marginTop: 10
  },
  searchContainer: {
    marginTop: 20
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '60%'
  }
};

export default Feed;