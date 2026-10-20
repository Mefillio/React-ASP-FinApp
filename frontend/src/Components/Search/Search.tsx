import React, { useState } from 'react'

interface Props {
    onSearchSubmit: (e: React.SyntheticEvent) => void;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search = ({ onSearchSubmit, handleSearchChange, search }: Props) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  )
}

export default Search