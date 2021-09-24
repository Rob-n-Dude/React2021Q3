import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/actions";
import { iStore } from "../../redux/store";
import { SearchFiltres } from "../../shared/searchFiltres";

interface IPagination {
    getSearchResults: (filters:SearchFiltres) => void;
}

export const Pagination:React.FC<IPagination> = ({ getSearchResults}): JSX.Element => {

    const dispatch = useDispatch();
    const resultCount = useSelector<iStore, number>(state => state.searchCount);
    const searchParams = useSelector<iStore, SearchFiltres>(state => state.searchQuery);

    const [currentPage, setCurrentPage] = useState<number>(searchParams.page);

    const decreasePage = () => {
        setCurrentPage((current) => current - 1)
    }

    const increasePage = () => {
        setCurrentPage((current) => current + 1);
    }


    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        getSearchResults({
            ...searchParams,
            page: currentPage,
        })
    }

    const setPageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const reg = /[0-9]+/gm;
        const match = value.match(reg);
        if (match !== null) {
            if (resultCount / searchParams.pageSize > +match) {
                setCurrentPage(() => +match);
                dispatch(actions.SET_SEARCH_QUERY({
                    ...searchParams,
                    page: currentPage,
                }))
            }
        }
    }

    return (
        <>
            <form onSubmit={(e) =>submitHandler(e)}>
                <button type='submit' onClick={() => decreasePage()} disabled={currentPage === 1}>Prev page</button>
                <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>) => setPageHandler(e)} value={currentPage}/>
                <button type='submit'>Go to</button>
                <button  type='submit' onClick={() => increasePage()} disabled={currentPage === Math.ceil(resultCount/searchParams.pageSize)}>Next page</button>
            </form>
        </>
    )
}