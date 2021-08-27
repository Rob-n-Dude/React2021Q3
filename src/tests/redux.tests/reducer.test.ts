import { Dispatch } from 'react';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { actions } from '../../redux/actions';
import { IAction } from '../../redux/actionTypes';
import { newsReducer, rootReduser } from '../../redux/reducer';
import { initialState, iStore, store } from "../../redux/store";

describe("testing reduser", () => {
    let state: iStore;
    let testStore: MockStoreEnhanced<iStore, Dispatch<IAction<any>>>;
    beforeEach(() => {
        testStore = configureMockStore<iStore, Dispatch<IAction<any>>>()(initialState);
        state = testStore.getState();
    })
    // let state: iStore;
    // beforeEach(() => {
    //     state = {...initialState};
    //     })

    it('shoud return state with isLoading-true', () => {
        const action = actions.SET_IS_LOADING(true);
        // const newState = newsReducer(state, actions.SET_IS_LOADING(true));
    })

})