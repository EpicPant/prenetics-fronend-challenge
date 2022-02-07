import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { Sidebar } from '../../component/Sidebar';

describe('Prenetics Sidebar Testing', () => {

    beforeEach(() => {
        render(<Sidebar />);
    });

    afterEach(cleanup);

    test('render the Prenetics™ title', () => {
        expect(screen.getByText('Prenetics™')).not.toBeNull()
    });

    test('render veretical menu with 3 links', () => {
        expect(screen.getByTestId('sidebar-link-list').childNodes.length).toBe(3)
    });
});