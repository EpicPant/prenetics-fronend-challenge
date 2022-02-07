import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { SearchInputGroup } from '../../component/SearchInputGroup';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { updateKeyword } from '../../feature/search';
import { goToPage } from '../../feature/pagination';

describe('Search Input Group Testing', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <SearchInputGroup />
            </Provider>
        )
    });

    afterEach(cleanup);

    it('renders <input/>', () => {
        const input = screen.getByTestId('search-input');
        expect(input).not.toBeNull();
    });

    it('redux action called when input update', () => {
        const input = screen.getByTestId('search-input');
        expect(store.getState().search.value).toBe('');
        fireEvent.change(input, {
            target: {
                value: 'test'
            }
        });
        expect(store.getState().search.value).toBe('test');
    });

    it('should update query & change current page to 1 after form submitted', () => {        
        store.dispatch(goToPage({ current_page: 2 }));
        const form = screen.getByTestId('search-input-group');
        expect(store.getState().pagination.current_page).toBe(2);
        fireEvent.submit(form, { value: {} });
        expect(store.getState().pagination.current_page).toBe(1);
    });

});