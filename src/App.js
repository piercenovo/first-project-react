import React from 'react';
import './App.css';

import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import StaticContext from './context/StaticContext'
import { Link, Route } from "wouter";

export default function App() {

  return (
    <StaticContext.Provider 
      value={{ name: 'piercenovoa', suscribete: true}}>
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className="App-logo" alt='Giphy Logo' src="/isologoo.png"/>
        </Link>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword"/>
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
    </StaticContext.Provider>
  )
}

