import { SearchFiltres } from "../shared/searchFiltres"
import { SearchArticle } from "../shared/searchValue"
import { ActionTypes, IAction} from "./actionTypes"

export const actions = {
    SET_SEARCH_RESULTS: (searchResults:SearchArticle[]): IAction<SearchArticle[]> => { 
        return {
            type: ActionTypes.SET_SEARCH_RESULTS,
            payload: searchResults,
        }
    },
    SET_SEARCH_QUERY: (searchQuery: SearchFiltres): IAction<SearchFiltres> => {
        return {
            type: ActionTypes.SET_SEARCH_QUERY,
            payload: searchQuery,
        }
    },
    SET_SEARCH_COUNT: (count: number): IAction<number> => {
        return {
            type: ActionTypes.SET_SEARCH_COUNT,
            payload: count,
        }
    },
    SET_IS_LOADING: (isLoading: boolean): IAction<boolean> => {
        return {
            type: ActionTypes.SET_IS_LOADING,
            payload: isLoading,
        }
    },
}