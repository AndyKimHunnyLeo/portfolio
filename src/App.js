import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import home from './routes/home';
import projects from './routes/projects';
import contact from './routes/contacts';
import Footer from './components/Footer'

function App() {
  return (

    <BrowserRouter>
      <Navigation />
      <Route path="/projects" component={projects}></Route>
      <Route path="/" exact={true} component={home}></Route>
      <Route path="/contact" component={contact}></Route>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
