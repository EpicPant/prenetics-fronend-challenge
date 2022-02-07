import '../style/search_input_group.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateKeyword, updateQuery } from '../feature/search';
import { goToPage } from '../feature/pagination';
import { SEARCH_PLACEHOLDER } from '../resources/constants';
import { RootState } from '../store';

export const SearchInputGroup = () => {

    const { value, query } = useSelector((state: RootState) => state.search);

    const dispatch = useDispatch();

    const changeKeyword = (v: string) => {
        dispatch(updateKeyword(v));
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const stringQuery = value.split(':');
        const res = {...query}
        res.patientname = stringQuery[0] || '';
        res.sampleid = stringQuery[1] || '';
        res.activationtime = stringQuery[2] || '';
        res.resulttime = stringQuery[3] || '';
        dispatch(updateQuery(res));
        dispatch(goToPage({ current_page: 1 }));
    }

    return (
        <form className='search-group' onSubmit={handleFormSubmit} data-testid='search-input-group'>
            <i className='fa fa-search'/>
            <input type='text' name='keyword' data-testid='search-input' placeholder={SEARCH_PLACEHOLDER} value={value} onChange={(e) => changeKeyword(e.target.value)} id='keyword' />               
        </form>
    )
}