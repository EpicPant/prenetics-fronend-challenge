import React from 'react';
import { ResultType } from '../resources/types';

export const ResultTableRow = (props: ResultType) => {
    return (
        <tr id="results" data-testid='test-result-data'>
            <td>{props.sampleId}</td>
            <td>{props.activationTime}</td>
            <td>{props.resultTime}</td>
            <td>-</td>
            <td>{props.patientName}</td>
            <td>{props.result === 'positive' ? 'detected' : 'not-detected'}</td>
        </tr>
    );
}

export const CircleResultTableRow = (props: ResultType) => {
    return (
        <tr id="results" data-testid='circle-test-result-data'>
            <td>{props.sampleId}</td>
            <td>{props.activationTime}</td>
            <td>{props.resultTime}</td>
            <td>{props.resultType || '-'}</td>
            <td>-</td>
            <td>{props.patientName}</td>
            <td>{props.result === 'positive' ? 'detected' : 'not-detected'}</td>
        </tr>
    )
}