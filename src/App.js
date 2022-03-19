import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Profile from './Profile';
import Razorpay from './Razorpay';
import Research from './Research';
import Mentor from './Mentor';
import Conference from './Conference';

const promise = loadStripe('pk_test_51Jb4n2SHreZY2Ludv5Xy9Uh8gVOeAL5UW0Tezt19CiMVCLNm6mM6ZqgnzALZ04FFNMatgGwU45BSVuVCEWLZYvNj00Rni8o421');

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser)

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (

    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/mentor">
            <Header />
            <Mentor />
          </Route>
          <Route path="/research">
            <Header />
            <Research />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/conference">
            <Header />
            <Conference />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/razorpay">
            <Razorpay />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
