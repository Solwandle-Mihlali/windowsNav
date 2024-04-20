import { useState, useEffect } from "react";
import "../components/login.css";
import { AllowedUser } from "../config";

interface LoginProps {
  handlePasswordConfirmed: () => void;
}

const Login: React.FC<LoginProps> = ({ handlePasswordConfirmed }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Retrieve stored email and password from localStorage when the component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    
    if (storedEmail && storedPassword) {
      setUserEmail(storedEmail);
      setUserPassword(storedPassword);
    }
  }, []);

  const currentUsers = [
    {
      email: AllowedUser.email,
      pass: AllowedUser.password,
    },
  ];

  const validateCredentials = (
    e: React.FormEvent<HTMLFormElement>,
    enteredEmail: string,
    enteredPassword: string
  ) => {
    e.preventDefault();

    const isValidUser = currentUsers.some(
      (user) => user.email === enteredEmail && user.pass === enteredPassword
    );

    if (isValidUser) {
      // Save credentials to localStorage if login is successful
      localStorage.setItem("userEmail", enteredEmail);
      localStorage.setItem("userPassword", enteredPassword);
      handlePasswordConfirmed();
    } else {
      alert("Credentials don't match");
    }
  };

  return (
    <div className="loginMain">
      <form
        onSubmit={(e) => {
          validateCredentials(e, userEmail, userPassword);
        }}
      >
        <label htmlFor="email">
          Email
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
