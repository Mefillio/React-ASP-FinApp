import React, { SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

//Snippets tsrafce -- rafce
function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('')


  const handleSearchChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
  }

  //Type Narrowing to make sure that the result is of type string or CompanySearch[]
  //Produce error if the result is of type string, otherwise set the search results to the state
  const onSearchSubmit = async (e : React.SyntheticEvent) => {
    e.preventDefault(); 
    const result = await searchCompanies(search);
    if(typeof result === 'string'){
      setServerError(result);
      console.log("Error: ", result);

    } else if(Array.isArray(result)){
      setSearchResult(result);
    }
    
    console.log("Results: ", result);
    console.log("Search Results: ", searchResult);
  } 

  const onPortfolioCreate = (e : SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} handleSearchChange={handleSearchChange} search={search} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );
}

export default App;
