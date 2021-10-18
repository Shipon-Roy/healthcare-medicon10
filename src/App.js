import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Price from './components/Price/Price';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <PrivateRoute path="/services">
          <Services></Services>
        </PrivateRoute>
        <PrivateRoute path="/doctors">
          <Doctors></Doctors>
        </PrivateRoute>
        <PrivateRoute path="/price">
          <Price></Price>
        </PrivateRoute>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/login">
          <LogIn></LogIn>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route exact path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
