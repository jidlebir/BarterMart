import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./LOGO.png";
import "./App.css";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App flex-column ">
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Barter Mart</h1>
          </div>
        </header>
        <div className="container">
          <Home />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
