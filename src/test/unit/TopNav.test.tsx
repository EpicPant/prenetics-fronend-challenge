import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { TopNav } from '../../component/TopNav';

describe('TopNav Testing', () => {

    beforeEach(() => {
        render(<TopNav />);
    });

    afterEach(cleanup);

    test('if renders title', () => {
        expect(screen.queryByTestId('top-nav')?.getElementsByTagName('h2')[0]).toHaveTextContent('Patient Management');
    });

    test('render organistaion name', () => {
        expect(screen.queryByText('Your Organisation:')).not.toBeNull();
        expect(screen.queryByText('BlackSheep')).not.toBeNull();
    });
});