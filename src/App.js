import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Todolist from './features/counter/Todolist';
import MovieCard from './component/MovieCard';
import MovieDB from './features/counter/MovieDB';
import Home from './features/counter/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Home />
        
      </header>
    </div>
  );
}

export default App;
