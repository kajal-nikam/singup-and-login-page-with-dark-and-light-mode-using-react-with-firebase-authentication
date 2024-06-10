import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Spinner from "./Spinner";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted!");
    }, 2000);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("account created");
    } catch (err) {
      console.log(err);
    }
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>
      <button className="toggle-btn" onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="form-container">
        <h2>{loading ? "Loading..." : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={(e)=> setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          <div className="btn-group">
            <button type="submit" disabled={loading}>
              {loading ? <Spinner /> : "Login"}
            </button>
            <br />
            <p>
              Already Registered? <Link to="/SignUp">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
