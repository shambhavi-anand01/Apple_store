import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" },
  formWrapper: { backgroundColor: "white", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "350px", textAlign: "center" },
  title: { fontSize: "1.8rem", marginBottom: "20px", fontFamily: "Arial, sans-serif" },
  input: { width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "1rem" },
  loginButton: { width: "100%", backgroundColor: "#007BFF", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer", fontSize: "1rem" },
  toggleButton: { marginTop: "10px", backgroundColor: "#28a745", color: "white", border: "none", padding: "7px", borderRadius: "5px", cursor: "pointer", fontSize: "0.9rem" },
  errorText: { color: "red", marginTop: "10px" },
};

function Login() {
  const { login, signup } = useContext(AuthContext); // ✅ Fix: Import signup function
  const [isSignup, setIsSignup] = useState(false);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password, name } = credentials;
    if (!email || !password || (isSignup && !name)) {
      setError("All fields are required!");
      return;
    }

    try {
      if (isSignup) {
        await signup(name, email, password); // ✅ Fix: Call signup correctly
      } else {
        await login(email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>{isSignup ? "Signup" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input type="text" name="name" placeholder="Full Name" style={styles.input} value={credentials.name} onChange={handleChange} />
          )}
          <input type="email" name="email" placeholder="Email" style={styles.input} value={credentials.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" style={styles.input} value={credentials.password} onChange={handleChange} />
          <button type="submit" style={styles.loginButton}>{isSignup ? "Signup" : "Login"}</button>
          {error && <p style={styles.errorText}>{error}</p>}
        </form>
        <button onClick={() => setIsSignup(!isSignup)} style={styles.toggleButton}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
        </button>
      </div>
    </div>
  );
}

export default Login;
