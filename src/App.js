// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import SigninLogin from "./components/SigninLogin";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been disabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Text Utils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert}>
        </Alert>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" */}
            {/* <About/> */}
            {/* </Route> */}
             {/* <Route path="/" */}
              <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />
            {/* </Route> */}
            {/* <Route path="/signin" */}
              {/* <SigninLogin/> */}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
