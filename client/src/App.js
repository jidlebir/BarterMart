import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Homepages from './pages/Loginpage';
import Loginpages from './pages/Homepages';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const client = new ApolloClient({
  uri: '/Bartermart'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App flex-column ">
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
            <h1>Welcome to Barter Mart</h1>
          </div>
        </header>
        <div className="container">
          <Homepages/>
          <Loginpages/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Welcome</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
