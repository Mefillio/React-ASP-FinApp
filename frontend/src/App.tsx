import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';



//Snippets tsrafce -- rafce
function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
