import React from "react";
import "./App.css";
import TaskBar from "./components/TaskBar";



interface MainAppProps {
  winSearchVisibility: boolean;
}

function App({ }: MainAppProps) {
  return (
<>
      <TaskBar />
    </>
  );
}

export default App;
