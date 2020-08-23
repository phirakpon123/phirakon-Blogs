import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';

function App() {
  return (
    <div>
      <Header />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
      <Footer />
    </div>
  );
}

export default App;
