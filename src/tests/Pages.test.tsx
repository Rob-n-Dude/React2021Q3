import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { AboutPage } from '../components/pages/AboutPage';
import { ErrorPage } from '../components/pages/ErrorPage';
import HomePage from '../components/pages/HomePage';
import { store } from '../redux/store';


describe('Testing pages', () => {
    it('Test AboutPage', () => {
        const el: RenderResult = render(<AboutPage/>);
        const innerEl = el.getByText('About Page')
        expect(innerEl.textContent).toBe('About Page');
    });
    it('Test ErrorPage', () => {
        const el: RenderResult = render(<ErrorPage/>);
        const testedElement = el.getByTestId('ErrorPage-text');
        expect(testedElement.textContent).toBe('This page is not exists');
    });

    it('Test HomePage', async () => {
        render(<Provider store={store}>
            <HomePage/>
        </Provider>
        );
        const searchBar = screen.getByTestId('search-bar');
        const field = screen.getByTestId('field');
        expect(screen.queryByTestId('pagination')).toBeNull();
        (screen.getByDisplayValue('') as HTMLInputElement).value = 'apple';
        fireEvent.click(screen.getByRole('button'))
        expect(screen.queryByTestId('pagination')).not.toBeNull();
    });
})

