import React, { Dispatch, FormEvent, useState } from 'react';
import { getNews } from '../../services/Api';
import { SearchFiltres, SortBy } from '../../shared/searchFiltres';
import { SearchValue } from '../../shared/searchValue';
import './searchBar.scss';

interface ISearchProps {
    setSearchResults: Dispatch<React.SetStateAction<SearchValue[]>>
}

export const SeachBar: React.FC<ISearchProps> = ({setSearchResults}):JSX.Element => {

    const [sortBy, setSortBy] = useState<SortBy>(SortBy.publishedAt);
    const [searchText, setSearchText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        getNews(filterParser()).then((value) => {
            setSearchResults(value)
        }).finally(() => {
            setLoading(false)
        });

    }

    const filterParser = (): SearchFiltres => {
        return {
            q: searchText,
            sortBy: sortBy,
            page: 1,
            pageSize: 20,
        }
    }

    return (
        <>
            <div className='search-bar'>
                <div className='search-bar_main'>
                    <img className='search-bar_main_image' src='./search-icon.png'></img>
                    <form className='search-bar_main_form' onSubmit={submitHandler}>
                        <input className='search-bar_main_input' 
                            type='text' 
                            placeholder='What u want to find?' 
                            value={searchText} 
                            onChange={(event) => setSearchText(event.target.value)}/>
                        <button type='submit'>{loading === true ? 'Loading...' : 'Search'}</button>
                    </form>
                    <div className='search-bar_radio'>
                        <input type="radio"
                            value={SortBy.popularity}
                            checked={sortBy === SortBy.popularity}
                            onChange={() => setSortBy(SortBy.popularity)} />

                        <input type="radio"
                            value={SortBy.publishedAt}
                            checked={sortBy === SortBy.publishedAt}
                            onChange={() => setSortBy(SortBy.publishedAt)} />

                        <input type="radio"
                            value={SortBy.relevancy}
                            checked={sortBy === SortBy.relevancy}
                            onChange={() => setSortBy(SortBy.relevancy)} />
                    </div>
                </div>
            </div>
        </>
    )
}