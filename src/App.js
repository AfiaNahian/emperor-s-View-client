import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import AddReview from './Pages/AddReview/AddReview';
import AddService from './Pages/AddService/AddService';
import AllOrder from './Pages/AllOrder/AllOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/allorder">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;

