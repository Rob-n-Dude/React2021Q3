import {configureStore} from '@reduxjs/toolkit'
import { createStore } from "redux";
import { initialSearch, SearchFiltres } from "../shared/searchFiltres";
import { SearchArticle } from "../shared/searchValue";
import { newsReducer } from "./reducer";

export interface iStore {
    results: SearchArticle[],
    searchCount: number,
    searchQuery: SearchFiltres,
    isLoading: boolean,
} 

export const initialState: iStore = {
    results: [],
    searchCount: 0,
    searchQuery: initialSearch,
    isLoading: false,
}

export const store = createStore(newsReducer, initialState);
// export const store = configureStore({
//     reducer: newsReducer,
//     preloadedState: initialState,
//     devTools: process.env.NODE_ENV !== 'production',
// })
