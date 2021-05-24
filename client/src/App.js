import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Homepages from './pages/Homepages';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import useToken from './useToken';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});



function App() {
  // const [token, setToken] = useState();
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
    
      <Switch>
              <Route exact path="/Homepages" component={Homepages} />
              <Route exact path="/Login" component={Login} />
             
            </Switch>
            </div>
          <Footer/>
        </div>
      </BrowserRouter>
      
    </ApolloProvider>
  );
}

export default App;

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }


// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token

// }








