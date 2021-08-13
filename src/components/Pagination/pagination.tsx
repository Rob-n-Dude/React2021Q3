import React, { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { SearchFiltres } from "../../shared/searchFiltres";

interface IPagination {
    getSearchResults: (filters:SearchFiltres) => void;
    setSearchParams: Dispatch<React.SetStateAction<SearchFiltres>>,
    searchParams: SearchFiltres
    totalResults: number,
}

export const Pagination:React.FC<IPagination> = ({totalResults, getSearchResults, searchParams, setSearchParams}): JSX.Element => {
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
            if (totalResults / searchParams.pageSize > +match) {
                setCurrentPage(() => +match);
                setSearchParams(() => {
                    return {
                    ...searchParams,
                    page:currentPage,
                    }
                })
            }
        }
    }

    return (
        <>
            <form onSubmit={(e) =>submitHandler(e)}>
                <button type='submit' onClick={() => decreasePage()} disabled={currentPage === 1}>Prev page</button>
                <input type="text" onChange={(e:ChangeEvent<HTMLInputElement>) => setPageHandler(e)} value={currentPage}/>
                <button type='submit'>Go to</button>
                <button  type='submit' onClick={() => increasePage()} disabled={currentPage === Math.ceil(totalResults/searchParams.pageSize)}>Next page</button>
            </form>
        </>
    )
}