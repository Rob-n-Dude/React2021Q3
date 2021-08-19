import { ActionTypes, IAction } from "./actionTypes";
import { initialState, iStore } from "./store";

export const newsReducer = (state: iStore = initialState, action:IAction<any>): iStore => {
    switch (action.type) {
        case ActionTypes.SET_IS_LOADING: {
            return {
                ...state, isLoading: action.payload,
            }
        }
        case ActionTypes.SET_SEARCH_COUNT: {
            return {
                ...state, searchCount: action.payload,
            }
        }
        case ActionTypes.SET_SEARCH_QUERY: {
            return {
                ...state, searchQuery: action.payload,
            }
        }
        case ActionTypes.SET_SEARCH_RESULTS: {
            return {
                ...state, results: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}