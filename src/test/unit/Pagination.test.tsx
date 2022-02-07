import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Pagination } from '../../component/Pagination';
import { store } from '../../store';
import { goToPage, updateTotalPage } from '../../feature/pagination';

describe('Unit Test - Pagination List', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <Pagination />
            </Provider>
        )
    });

    afterEach(cleanup);

    test('if renders Prev button', () => {
        expect(screen.getAllByText('Prev').length).toBe(1);
    });

    test('if renders Next button', () => {
        expect(screen.getAllByText('Next').length).toBe(1);
    });

    test('Amount of page no. button match redux state', () => {
        store.dispatch(updateTotalPage({ total_page: 1 }));
        expect(screen.getAllByTestId('page-link').length).toBe(store.getState().pagination.total_page + 2);
        store.dispatch(updateTotalPage({ total_page: 3 }));
        expect(screen.getAllByTestId('page-link').length).toBe(store.getState().pagination.total_page + 2);
    });

    test('Current page and active className', () => {
        store.dispatch(updateTotalPage({ total_page: 3 }));
        store.dispatch(goToPage({ current_page: 1 }));
        expect(screen.getByTestId(`page-link-${store.getState().pagination.current_page}`).parentElement?.classList).toContain('active');
        store.dispatch(goToPage({ current_page: 2 }));
        expect(screen.getByTestId(`page-link-${store.getState().pagination.current_page}`).parentElement?.classList).toContain('active');
    });

});