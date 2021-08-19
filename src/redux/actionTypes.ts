export enum ActionTypes {
    SET_SEARCH_RESULTS,
    SET_SEARCH_QUERY,
    SET_SEARCH_COUNT,
    SET_IS_LOADING,
}

export interface IAction<T> {
    type: ActionTypes,
    payload: T,
}