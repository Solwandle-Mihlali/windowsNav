import React, { useState } from "react";
import "./App.css";
import TaskBar from "./components/TaskBar";
import Login from "./components/login";


interface MainAppProps {
  winSearchVisibility: boolean;
}

function App({}: MainAppProps) {
  const [loginValid, setLoginValid] = useState(Boolean)
  return (
    <>
    {
      loginValid ?  <TaskBar /> : <Login handlePasswordConfirmed={()=>setLoginValid(true)}/>
    }
    </>
  );
}

export default App;
