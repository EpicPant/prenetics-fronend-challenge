import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TestResultPage } from '../../component/TestResultPage';
import { server } from '../../resources/mock_handler';

describe('Result Table testing', () => {

    beforeAll(() => {
        server.listen();
    });

    afterAll(() => {
        server.close();
    })

    beforeEach(() => {
        render(
            <Provider store={store}>
                <TestResultPage />
            </Provider>
        )
    });

    afterEach(() => {
        cleanup();
        server.resetHandlers();
    });

    test('test display result correctly', async () => {
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
        expect(await screen.findByTestId('test-result-page')).toBeInTheDocument();
        expect(screen.queryByTestId('test-result-page-loading')).toBeNull();
        expect(screen.queryAllByTestId('test-result-data').length).toBeGreaterThanOrEqual(0);
        expect(screen.queryAllByTestId('test-result-data').length).toBeLessThanOrEqual(15);
    });

});