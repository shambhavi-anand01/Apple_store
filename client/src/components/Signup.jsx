import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

function Signup() {
  const { signup } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(credentials.name, credentials.email, credentials.password);
      alert("Signup successful! Please log in.");
    } catch (err) {
      setError("Signup failed");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={credentials.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
