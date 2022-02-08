import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { CircleResultTableRow, ResultTableRow } from '../../component/ResultTableRow';
import { ResultType } from '../../resources/types';

const initialValue: ResultType = {
    sampleId: "123456",
    activationTime: new Date().toDateString(),
    resultTime: new Date(new Date().setFullYear(2009)).toDateString(),
    result: 'negative',
    resultType: 'rtpcr',
    patientName: 'Bruce Lee'
}

describe('Result Table Row (Circle)', () => {
    beforeEach(() => {
        render(
            <table>
                <tbody>
                    <CircleResultTableRow {...initialValue} />
                </tbody>
            </table>
        )
    })

    afterAll(cleanup);

    it('should render 6 td', () => {
        const elm = screen.getByTestId('circle-test-result-data');
        expect(elm.childElementCount).toEqual(7);
        expect(screen.getByText(initialValue.sampleId)).toBeTruthy;
        expect(screen.getByText(initialValue.activationTime)).toBeTruthy;
        expect(screen.getByText(initialValue.resultType)).toBeTruthy;
        expect(screen.getByText(initialValue.resultTime)).toBeTruthy;
        expect(screen.getByText(initialValue.patientName)).toBeTruthy;
    });
});

describe('Result Table Row (Non Circle)', () => {

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

    it('should render 5 td', () => {
        const elm = screen.getByTestId('test-result-data');
        expect(elm.childElementCount).toEqual(6);
        expect(screen.getByText(initialValue.sampleId)).toBeTruthy();
        expect(screen.getByText(initialValue.activationTime)).toBeTruthy;
        expect(screen.getByText(initialValue.resultTime)).toBeTruthy;
        expect(screen.getByText(initialValue.patientName)).toBeTruthy;
    });
});