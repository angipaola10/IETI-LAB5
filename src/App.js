import React from 'react';
import MainView from './components/MainView';
import Login from './components/Login';
import NewTask from './components/NewTask';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

function App() {

  return (
    <Router>
    
      <Route exact path="/">
        { localStorage.getItem("loggingStaus") === "logged" ?
         <Redirect to="/mainView" /> : <Login />}
      </Route>

      <PrivateRoute component={MainView} exact path="/mainView" />

      <PrivateRoute component={UserProfile} exact path="/myProfile" />

      <PrivateRoute component={NewTask} exact path="/newTask" />

    </Router>
  );
}

export default App;
