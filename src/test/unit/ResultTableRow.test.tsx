import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { ResultTableRow } from '../../component/ResultTableRow';
import { ResultType } from '../../resources/types';

describe('Result Table Row', () => {
    const initialValue: ResultType = {
        sampleId: "123456",
        activationTime: new Date().toDateString(),
        resultTime: new Date(new Date().setFullYear(2009)).toDateString(),
        result: 'negative',
        resultType: 'rtpcr',
        patientName: 'Bruce Lee'
    }

    beforeEach(() => {
        render(
            <table>
                <tbody>
                    <ResultTableRow {...initialValue} />
                </tbody>
            </table>
        )
    });

    afterEach(cleanup);

    it('should render 5 td with corresponding result data', () => {
        const elm = screen.getByTestId('test-result-data');
        expect(elm.childElementCount).toEqual(6);
        expect(screen.getByText(initialValue.sampleId)).toBeTruthy();
        expect(screen.getByText(initialValue.activationTime)).toBeTruthy;
        expect(screen.getByText(initialValue.resultTime)).toBeTruthy;
        expect(screen.getByText(initialValue.patientName)).toBeTruthy;
    });
});