import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { getResultsFromAPI } from '../../feature/result';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TestResultPage } from '../../component/TestResultPage';
import { ResultTableRow } from '../../component/ResultTableRow';

describe('Result Table testing', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <TestResultPage />
            </Provider>
        )
    });

    afterEach(cleanup);

    test('test display result correctly', async () => {
        expect(screen.queryByTestId('test-result-page-loading')).not.toBeNull();
        expect(screen.queryByTestId('test-result-page')).toBeNull();
        await store.dispatch(getResultsFromAPI())
        expect(screen.queryByTestId('test-result-page-loading')).toBeNull();
        expect(screen.queryByTestId('test-result-page')).not.toBeNull();
        expect(screen.queryAllByTestId('test-result-data').length).toBe(store.getState().result.data.length);
    });

});