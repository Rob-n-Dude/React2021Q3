import React, { useState } from 'react';
import { getNews } from '../../services/Api';
import { initialSearch, SearchFiltres } from '../../shared/searchFiltres';
import { SearchArticle } from '../../shared/searchValue';
import { CardsField } from '../Cards/CardsField';
import { Pagination } from '../Pagination/pagination';
import { SeachBar } from '../SearchBar/SearchBar';

const HomePage: React.FC = ():JSX.Element => {

  const [searchParams, setSearchParams] = useState<SearchFiltres>(initialSearch)
  const [totalResults, setTotalResults] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<SearchArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getSearchResults = (filters:SearchFiltres) => {
    setLoading(true);
    getNews(filters).then((value) => {
      setSearchParams(filters);
      setTotalResults(value.totalResults);
      setSearchResults(value.articles);
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <>
      <SeachBar getSearchResults={getSearchResults} totalResults={totalResults}/>
      {
        loading === true ? <p>Loading</p> : 
        <>
        <CardsField searchResults={searchResults}/>
        {totalResults === 0 ? '' : <Pagination totalResults={totalResults} getSearchResults={getSearchResults} searchParams={searchParams} setSearchParams={setSearchParams} ></Pagination>}
        </>
      }
    </>
  )   
}

export default HomePage;