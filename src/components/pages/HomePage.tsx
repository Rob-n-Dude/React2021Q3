import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions';
import { iStore } from '../../redux/store';
import { getNews } from '../../services/Api';
import { SearchFiltres } from '../../shared/searchFiltres';
import { CardsField } from '../Cards/CardsField';
import { Pagination } from '../Pagination/pagination';
import { SeachBar } from '../SearchBar/SearchBar';


const HomePage: React.FC = ():JSX.Element => {

  const dispatch = useDispatch();
  const loading = useSelector<iStore, boolean>(state => state.isLoading);
  const resultCount = useSelector<iStore, number>(state => state.searchCount);

  const getSearchResults = (filters:SearchFiltres) => {
    dispatch(actions.SET_IS_LOADING(true))
    getNews(filters).then((value) => {
      dispatch(actions.SET_SEARCH_COUNT(value.totalResults))
      dispatch(actions.SET_SEARCH_QUERY(filters))
      dispatch(actions.SET_SEARCH_RESULTS(value.articles))
    }).finally(() => {
      dispatch(actions.SET_IS_LOADING(false))

    })
  }

  return (
    <>
      <SeachBar getSearchResults={getSearchResults}/>
      {
        loading === true ? <p>Loading</p> : 
        <>
        <CardsField />
        {resultCount === 0 ? '' : <Pagination  getSearchResults={getSearchResults} ></Pagination>}
        </>
      }
    </>
  )   
}

export default HomePage;