import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Enter Name" style={styles.input} />
      <input type="email" placeholder="Enter Email" style={styles.input} />
      <input type="password" placeholder="Enter Password" style={styles.input} />
      <button style={styles.button}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '300px',
    margin: 'auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginTop: '50px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Signup;
