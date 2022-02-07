import '../style/pagination.css';
import React from 'react';
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { goToPage, nextPage, prevPage } from '../feature/pagination';

interface PageLinkProps {
    children?: any;
    current_page: number;
    id?: string;
}

const PageLink = (props: PageLinkProps) => {
    const dispatch = useDispatch();
    
    const handleChangePage = () => {
        if (props.children === 'Prev') dispatch(prevPage());
        if (props.children === 'Next') dispatch(nextPage());
        dispatch(goToPage({ current_page: parseInt(props.children) }))
    }

    return (
        <li onClick={handleChangePage} id={props.id || ''} className={props.current_page === props.children ? 'active' : ''} data-testid='page-link'>
            <a data-testid={`page-link-${props.children}`}>{props.children}</a>
        </li>
    )
}

export const Pagination = () => {
    const { current_page, total_page } = useAppSelector((state) => state.pagination);

    return (
        <div id='pagination' data-testid='pagination'>
            <ul className='inline'>
                <PageLink current_page={current_page} id='prev'>Prev</PageLink>
                { [...Array(total_page)].map((_, i) => (
                    <PageLink key={i} current_page={current_page}>{i + 1}</PageLink>
                )) }
                <PageLink current_page={current_page} id='next'>Next</PageLink>
            </ul>
        </div>
    )
}