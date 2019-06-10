import React from 'react';
import NavHeader from './Components/NavHeader'
import Jumbotron from './Components/Jumbotron'
import Services from './Components/Services'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Jumbotron />
      <Services />
    </div>
  );
}

export default App;
