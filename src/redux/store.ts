import { createStore } from "redux";
import { SearchFiltres } from "../shared/searchFiltres";
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
    searchQuery: {} as SearchFiltres,
    isLoading: false,
}

export const store = createStore(newsReducer, initialState);