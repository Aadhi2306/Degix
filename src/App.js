import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Product from "./Product";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function App() {
  const [{ user }, dispatch] =  useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        console.log("USER IS >>>" ,user);
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

  }, [dispatch,user]);



  return (
    <div className="App">
          <Router>
      <Switch>
      <Route path="/checkout">
      <Checkout />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
        <Route path="/">
          <Header />
          <Home />
          <Product />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
