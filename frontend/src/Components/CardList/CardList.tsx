import React from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e : React.SyntheticEvent) => void;
}

const CardList = ({searchResults, onPortfolioCreate}: Props) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map(result => {
          return <Card id={result.symbol} key={crypto.randomUUID()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
        })
      ) : (<h1>No results found</h1>)}
    </div>
  )
}

export default CardList