import { actions } from '../../redux/actions';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { newsReducer } from '../../redux/reducer';
import { initialState, iStore } from "../../redux/store";
import { Dispatch } from 'react';
import { IAction } from '../../redux/actionTypes';

describe("testing reduser", () => {
    let state: iStore;
    let testStore: MockStoreEnhanced<iStore, Dispatch<IAction<any>>>;
    beforeEach(() => {
        testStore = configureMockStore<iStore, Dispatch<IAction<any>>>()(initialState);
        state = testStore.getState();
    })
    it('shoud return state with isLoading-true', () => {
        const action = actions.SET_IS_LOADING(true);
        const newState = newsReducer(state, actions.SET_IS_LOADING(true));
    })

})