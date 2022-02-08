import React from 'react';
import { render, cleanup, screen, queryByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TestResultPage } from '../../component/TestResultPage';
import { server } from '../../resources/mock_handler';
import { getResultsFromAPI } from '../../feature/result';
import { switchOrganisation } from '../../feature/organisation';

describe('Result Table testing', () => {

    beforeAll(() => {
        server.listen({ onUnhandledRequest: 'bypass' });
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

    test('renders loading before making api call', async () => {
        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
        await store.dispatch(getResultsFromAPI())
        expect(screen.queryByText(/Loading/i)).toBeNull();
    });

    test('renders CircleResultTableRow when logged in as organisation Circle', async () => {
        const tableRow = await screen.findAllByTestId('circle-test-result-data');
        const hiddenTableRow = await screen.queryAllByTestId('test-result-data');
        expect(hiddenTableRow.length).toEqual(0);
        expect(tableRow.length).toEqual(2);
    });

    test('renders ResultTableRow when not logged in as organisation Circle', async () => {
        store.getState().organisation.name !== 'Circle' || store.dispatch(switchOrganisation());
        const tableRow = await screen.findAllByTestId('test-result-data');
        const hiddenTableRow = screen.queryAllByTestId('circle-test-result-data');
        expect(hiddenTableRow.length).toEqual(0);
        expect(tableRow.length).toEqual(2);
    });

    
});