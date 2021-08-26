import '@testing-library/jest-dom';
import { Dispatch } from 'react';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { actions } from '../../redux/actions';
import { ActionTypes, IAction } from '../../redux/actionTypes';
import { initialState, iStore} from '../../redux/store';
import { SearchFiltres } from '../../shared/searchFiltres';
import { SearchArticle } from '../../shared/searchValue';


describe('testing reduser', () => {
    let state: iStore;
    let testStore: MockStoreEnhanced<iStore, Dispatch<IAction<any>>>;
    beforeEach(() => {
        testStore = configureMockStore<iStore, Dispatch<IAction<any>>>()(initialState);
        state = testStore.getState();
    })

    it('should set loading state', () => {
        testStore.dispatch(actions.SET_IS_LOADING(true));

        const passedAction = testStore.getActions();
        const expectedAction = { type: ActionTypes.SET_IS_LOADING,
            payload: true, }

        expect(passedAction).toEqual([expectedAction])
    })

    it('Should set search count', () => {
        testStore.dispatch(actions.SET_SEARCH_COUNT(40));

        const passedAction = testStore.getActions();
        const expectedAction = { type: ActionTypes.SET_SEARCH_COUNT,
            payload: 40, }

        expect(passedAction).toEqual([expectedAction])
    })

    it('Should set search results', () => {
        const articlesToSet = [{} as SearchArticle]
        testStore.dispatch(actions.SET_SEARCH_RESULTS(articlesToSet));

        const passedAction = testStore.getActions();
        const expectedAction = { type: ActionTypes.SET_SEARCH_RESULTS,
            payload: articlesToSet, }

        expect(passedAction).toEqual([expectedAction])
    })

    it('Should set search querry', () => {
        const filtersToSet = {} as SearchFiltres;
        testStore.dispatch(actions.SET_SEARCH_QUERY(filtersToSet));

        const passedAction = testStore.getActions();
        const expectedAction = { type: ActionTypes.SET_SEARCH_QUERY,
            payload: filtersToSet, }

        expect(passedAction).toEqual([expectedAction])
    })
});