import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";

import CreateToDo from "./components/create-list.component";
import EditToDo from "./components/edit-list.component";
import ToDosList from "./components/todos-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="https://www.facebook.com/" className="navbar-brand" target="_blank">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com"/>
          </a>
          <Link className="navbar-brand" to="/">MERN-Stack ToDo App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={ToDosList} />
        <Route path="/edit/:id" component={EditToDo} />
        <Route path="/create" component={CreateToDo} />
      </div>
    </Router>
  );
}

export default App;
