import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import {Route} from "wouter";

function App() {
  
  
  return (
    <div className="App">
      <section className="App-content">
        <h1>Aplicación de gifs</h1>
        <a href='/gif/panda'>Gifs de pandas</a>
        <a href='/gif/cacas'>Gifs de futbol</a>
        <a href='/gif/naruto'>Gifs de naruto</a>
        <Route 
          component ={ListOfGifs}
          path="/gif/:keywords"
        />
      </section>
    </div>
  );
}

export default App;
