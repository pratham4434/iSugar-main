import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";
import ProfilePage from "../src/pages/profile/ProfilePage";
import Signup from "./pages/signup/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
