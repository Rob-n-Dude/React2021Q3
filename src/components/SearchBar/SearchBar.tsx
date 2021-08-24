import React, {  FormEvent, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { iStore } from '../../redux/store';
import { SearchFiltres, SortBy } from '../../shared/searchFiltres';
import './searchBar.scss';

interface ISearchProps {
    getSearchResults: (filtres: SearchFiltres) => void,
}

export const SeachBar: React.FC<ISearchProps> = ({getSearchResults}):JSX.Element => {

    const results = useSelector<iStore, number>(state => state.searchCount);
    const [sortBy, setSortBy] = useState<SortBy>(SortBy.publishedAt);
    const [searchText, setSearchText] = useState<string>('');
    const [pageSize, setPageSize] = useState<number>(5);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const filter = filterParser();
        getSearchResults(filter);
    }

    const filterParser = (): SearchFiltres => {
        return {
            q: searchText,
            sortBy: sortBy,
            page: 1,
            pageSize: pageSize,
        }
    }

    const selectHandler = (e: SyntheticEvent) => {
        const target = (e.target as HTMLSelectElement);
        setPageSize(+target.value);
    }

    return (
        <>
            <div className='search-bar' data-testid='search-bar'>
                <div className='search-bar_main'>
                    <img className='search-bar_main_image' src='./search-icon.png'></img>
                    <form className='search-bar_main_form' onSubmit={submitHandler}>
                        <input className='search-bar_main_input' 
                            type='text' 
                            placeholder='What u want to find?' 
                            value={searchText} 
                            onChange={(event) => setSearchText(event.target.value)}/>
                        <button type='submit'>Search</button>
                    </form>
                </div>
                <div className='search-bar_radio'>
                    <select value={pageSize} onChange={(event) => selectHandler(event)}>
                        <option value='5'>5</option>
                        <option value='8'>8</option>
                        <option value='10'>10</option>
                    </select>
                    <input type="radio"
                        value={SortBy.popularity}
                        checked={sortBy === SortBy.popularity}
                        onChange={() => setSortBy(SortBy.popularity)} 
                        id='radio-popularity'/>
                        <label htmlFor='radio-popularity'>{SortBy.popularity}</label>
                    <input type="radio"
                        value={SortBy.publishedAt}
                        checked={sortBy === SortBy.publishedAt}
                        onChange={() => setSortBy(SortBy.publishedAt)} 
                        id='radio-publishedAt'/>
                        <label htmlFor='radio-publishedAt'>{SortBy.publishedAt}</label>
                        
                    <input type="radio"
                        value={SortBy.relevancy}
                        checked={sortBy === SortBy.relevancy}
                        onChange={() => setSortBy(SortBy.relevancy)} 
                        id='radio-relevancy'/>
                        <label htmlFor='radio-relevancy'>{SortBy.relevancy}</label>
                    
                    {results !== 0 && <p>TotalPages: {Math.ceil(results/pageSize)}</p>}
                </div>
            </div>
        </>
    )
}