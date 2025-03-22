import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(credentials.email, credentials.password);
      navigate("/");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "300px",
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginTop: "50px",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Login;
