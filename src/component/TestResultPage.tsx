import '../style/table.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsFromAPI, updateMeta } from '../feature/result';
import { SearchInputGroup } from './SearchInputGroup';
import { ResultTableRow } from './ResultTableRow';
import { Pagination } from './Pagination';
import { TotalResultFound } from './TotalResultFound';
import { RootState } from '../store';
import { updateTotalPage } from '../feature/pagination';

export const TestResultPage = () => {
    const dispatch = useDispatch();
    const { pagination, result, search } = useSelector((state: RootState) => state);
    const { query } = search;
    const { data, meta, status } = result;
    const { current_page, limit } = pagination;

    useEffect(() => {
        dispatch(getResultsFromAPI())
    }, [current_page, query])

    useEffect(() => {
        dispatch(updateTotalPage({ total_page: Math.ceil(meta.total / limit) }))
     }, [meta.total])

    if (status !== 'fulfilled') {
        return (
            <div id='loading' data-testid='test-result-page-loading'>
                Loading...
            </div>       
        )
    }

    return (
        <>
            <div id='content-card' data-testid='test-result-page'>
                <SearchInputGroup />
                <div id='table-wrapper'>
                    <table id='result-table'>
                        <thead>
                            <tr>
                                <th>Barcode</th>
                                <th>Activation</th>
                                <th>Report Released</th>
                                <th>Rejection</th>
                                <th>Name</th>
                                <th>Result</th>
                            </tr>
                        </thead>

                        <tbody>
                            { data.map((item, i) => (
                                <ResultTableRow key={i} {...item} />
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
            <div id='table-footer'>
                <TotalResultFound>{meta.total}</TotalResultFound>
                <Pagination />
            </div>
        </>
    );
}