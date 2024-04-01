import { useState } from "react";
import "../components/login.css";
import { AllowedUser } from "../config";

interface LoginProps {
  handlePasswordConfirmed: () => void;
}
const Login: React.FC<LoginProps> = ({ handlePasswordConfirmed }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

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
        handlePasswordConfirmed()
    } else {
      alert("Credentials don't match");
    }
  };
  return (
    <div className="loginMain">
      <form
        onSubmit={(e) => {
          e.preventDefault(), validateCredentials(e, userEmail, userPassword);
        }}
      >
        <label htmlFor="#">
          {" "}
          Email
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label htmlFor="#">
          {" "}
          Password
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
