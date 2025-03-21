import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apple from "./image/apple.jpg";
import { AuthContext } from "../AuthContext";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  brandWrapper: {
    display: "flex",
    alignItems: "center",
  },
  brand: {
    fontSize: "1.5rem",
    fontFamily: "Roboto, sans-serif",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
  },
  loginButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "7px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "0.9rem",
    textDecoration: "none",
  },
  userDropdown: {
    position: "relative",
    cursor: "pointer",
    padding: "7px 15px",
    backgroundColor: "#007BFF",
    borderRadius: "5px",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    minWidth: "120px",
    textAlign: "left",
    visibility: "hidden",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
    // display: "none",
    zIndex: 1000,
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
    color: "#333",
    textAlign: "left",
  },
};

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    logout(); // Logs out user using context
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brandWrapper}>
        <img
          src={apple}
          alt="Logo"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <h1 style={styles.brand}>Apple Store</h1>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>
            Contact
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/cart" style={styles.navLink}>
            Cart
          </Link>
        </li>

        {/* User Dropdown */}
        {user ? (
          <li
            style={styles.navItem}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div style={styles.userDropdown}>
              {user.name} ▼
              <div
                style={{
                  ...styles.dropdownMenu,
                  visibility: showDropdown ? "visible" : "hidden",
                  opacity: showDropdown ? 1 : 0,
                  transition:
                    "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                }}
              >
                <div style={styles.dropdownItem} onClick={handleLogout}>
                  Logout
                </div>
              </div>
            </div>
          </li>
        ) : (
          <li style={styles.navItem}>
            <Link to="/login" style={styles.loginButton}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
