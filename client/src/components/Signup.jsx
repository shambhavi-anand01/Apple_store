import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password } = credentials;
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      await signup(name, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" style={styles.input} value={credentials.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Enter Email" style={styles.input} value={credentials.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Enter Password" style={styles.input} value={credentials.password} onChange={handleChange} />
        <button type="submit" style={styles.button}>Sign Up</button>
        {error && <p style={styles.errorText}>{error}</p>}
      </form>
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
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: "1rem",
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: "1rem",
  },
  errorText: {
    color: "red",
    marginTop: "10px",
  },
};

export default Signup;
