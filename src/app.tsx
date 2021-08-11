import React, { useState } from 'react';
import { CardsField } from './components/Cards/CardsField';
import { SeachBar } from './components/SearchBar/SearchBar';
import { SearchValue } from './shared/searchValue';

const App: React.FC = ():JSX.Element => {

  const [searchResults, setSearchResults] = useState<SearchValue[]>([]);

  return (
    <>
      <SeachBar setSearchResults={setSearchResults}/>
      <CardsField searchResults={searchResults}/>
    </>
  )   
}

export default App;