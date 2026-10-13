import React, { useState } from 'react'

type Props = {}

const Search = (props: Props) => {

    const [search, setSearch] = useState<string>('');


    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(search);
    }

  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={onClick}>Search</button>
    </div>
  )
}

export default Search