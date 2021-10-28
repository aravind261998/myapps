import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp/SignUp";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserService from "../src/Service/UserService";
import CreateUser from "./components/User/CreateUser";
import ListContactComponent from "./components/Contact/ListContactComponent";
import HeaderComponent from "./components/Contact/HeaderComponent";
import FooterComponent from "./components/Contact/FooterComponent";
import CreateContactComponent from "./components/Contact/CreateContactComponent";
import UpdateContactComponent from "./components/Contact/UpdateContactComponent";
import Login from "./components/Login/Login";
import Home from "./Home";
import about from "./components/Login/about";
import contactUs from "./components/Login/contactUs";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function App() {

  return (
    <Router>
      <Container fluid>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/contacts"
            component={ListContactComponent}
          ></Route>
          <Route
            path="/add-contact"
            component={CreateContactComponent}
          ></Route>
          <Route
            path="/update-contact/:id"
            component={UpdateContactComponent}
          ></Route>
          <Route
            path="/login"
            exact
            component={Login}
          ></Route>
          <Route
            path="/signup"
            exact
            component={SignUp}
          ></Route>
          <Route
            path="/contact"
            exact
            component={contactUs}
          ></Route>
          <Route
            path="/about"
            exact
            component={about}
          ></Route>
        </Switch>
      </Container>
      <FooterComponent />
    </Router>
  );
}

export default App;
