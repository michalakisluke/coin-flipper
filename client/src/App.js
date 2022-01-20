import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import About from './components/About';

function App () {

  return (
    <div className="App">
      <div>
        <SearchAppBar />
        <About />
        </div>
    </div>
  );
}

export default App;