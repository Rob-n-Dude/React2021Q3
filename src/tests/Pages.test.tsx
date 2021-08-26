import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
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

    it('Test HomePage', () => {
        render(<Provider store={store}>
            <HomePage/>
        </Provider>
        );
        expect(screen.getByTestId('search-bar')).not.toBeNull();
        expect(screen.getByTestId('field')).not.toBeNull();
        expect(screen.queryByTestId('pagination')).toBeNull();
        const input = screen.getByTestId('search-bar_main_input') 
        fireEvent.change(input, {
            target: {
                value: 'Apple',
            }
        });
        fireEvent.click(screen.getByRole('button'))
        expect(input).toHaveDisplayValue('Apple');          
    });
})

