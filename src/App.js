import React from 'react';
import './App.css';

// import ListOfGifs from './components/ListOfGifs/index';

import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
// import Detail from './pages/Detail'

import { Link, Route } from "wouter";

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className="App-logo" alt='Giphy Logo' src="/isologo.png"/>
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword"/>
      </section>
    </div>
  )
}

