import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Card } from '../components/Cards/Card';
import { Header } from '../components/Header/Header';
import { Pagination } from '../components/Pagination/pagination';
import { initialState, store } from '../redux/store';
import { SearchFiltres } from '../shared/searchFiltres';
import { SearchArticle } from '../shared/searchValue';
import { SeachBar } from '../components/SearchBar/SearchBar';

import configureMockStore from "redux-mock-store";

describe('Testing components', () => {
    it('Testing cards', () => {
        const info:SearchArticle = {
            source: {
                id: 12,
                name: 'James',
                },
            author: 'James',
            title: 'Testing',
            description: 'Testing desc',
            url: 'some Url',
            urlToImage: 'some img Url',
            publishedAt: 'any time',
            content: 'a lot of text'
        };

        render(<Card info={info}></Card>)

        expect(screen.getByText(info.title).textContent).toBe(info.title);
        expect(screen.getByText(info.content).textContent).toBe(info.content);
        expect(screen.getByText(info.author).textContent).toBe(info.author);
    });
    it('Testing header', () => {
        const { getByTestId ,getAllByTestId } = render(
        <HashRouter>
            <Header/>
        </HashRouter>);
        const links = getAllByTestId('link');
        links.forEach((link: HTMLElement) => {
            expect(getByTestId('navigation')).toContainElement(link);
        })
        expect(links).toHaveLength(2);
    });
    it('Pagination tests', async () => {
        const emptyFunc = (filt: SearchFiltres) => filt;

        render(<Provider store={store}>
            <Pagination getSearchResults={emptyFunc}/>
        </Provider>);
        
        const goToButton = screen.getByText(/Go to/i);
        const prevPageButton = screen.getByText(/Prev/i);
        const nextPageButton = screen.getByText(/Next page/i);
        expect(goToButton.textContent).toBe('Go to');
        expect(prevPageButton.textContent).toBe('Prev page');
        expect(goToButton).not.toBeDisabled();

        fireEvent.click(nextPageButton);
        await (() => {
            const state = store.getState();
            expect(state.searchQuery.page).toBe(2);
        })

        const input = (screen.getByTestId('input') as HTMLInputElement);
        input.value = '12';
        fireEvent.click(goToButton);

        await (() => {
            const state = store.getState();
            expect(state.searchQuery.page).toBe(12);
        })

        fireEvent.change(input, {
            target: {
                value: '123asd',
            }
        });

        await (() => {
            const state = store.getState();
            expect(state.searchQuery.page).toBe(12);
        })

        fireEvent.click(prevPageButton);

        await (() => {
            const state = store.getState();
            expect(state.searchQuery.page).toBe(11);
        })

        fireEvent.change(input, {
            target: {
                value: '123123124435123',
            }
        });

        await (() => {
            const state = store.getState();
            expect(state.searchQuery.page).toBe(11);
        })
    })
    it('Testing searchBar', async () => {
        const mockStore = configureMockStore();
        const store = mockStore(initialState);
        const fn = jest.fn();
        render(
            <Provider store={store}>
                <SeachBar getSearchResults={fn}/>
            </Provider>
        )

        const pageSizeOption = screen.getByTestId('select-size');

        fireEvent.change(pageSizeOption, {
            target: {
                value: '5',
            }
        });
        expect(pageSizeOption).toHaveDisplayValue('5');

        fireEvent.change(pageSizeOption, {
            target: {
                value: '10',
            }
        });
        expect(pageSizeOption).toHaveDisplayValue('10');
        
        expect(screen.getByTestId('radio-popularity')).not.toBeChecked();
        fireEvent.click(screen.getByTestId('radio-popularity'));
        expect(screen.getByTestId('radio-popularity')).toBeChecked();

        expect(screen.getByTestId('radio-relevancy')).not.toBeChecked();
        fireEvent.click(screen.getByTestId('radio-relevancy'));
        expect(screen.getByTestId('radio-relevancy')).toBeChecked();
        expect(screen.getByTestId('radio-popularity')).not.toBeChecked();

        expect(screen.getByTestId('radio-publishedAt')).not.toBeChecked();
        fireEvent.click(screen.getByTestId('radio-publishedAt'));
        expect(screen.getByTestId('radio-publishedAt')).toBeChecked();
        expect(screen.getByTestId('radio-relevancy')).not.toBeChecked();

    })
})