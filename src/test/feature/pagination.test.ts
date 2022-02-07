import { paginationReducer as reducer, goToPage, nextPage, prevPage, updateTotalPage } from '../../feature/pagination';
import { PaginationState } from '../../resources/types';

describe('Search Reducer testing', () => {

    let initialState: PaginationState;

    beforeEach(() => {
        initialState = {
            current_page: 1,
            limit: 15,
            total_page: 10
        }
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {type: ''})).toEqual(initialState)
    });

    it('should go to next page', () => {
        const init = { ...initialState };
        init.total_page = 2;

        const outcome = { ...init };
        outcome.current_page = 2;
        
        expect(reducer(init, nextPage())).toEqual(outcome);
    });

    it('should not go pass total_page', () => {
        const init = { ...initialState };
        init.current_page = init.total_page;
        expect(reducer(init, nextPage())).toEqual(init);
    });

    it('should go to prev page', () => {
        const init = { ...initialState };
        init.total_page = 3;
        init.current_page = 2;

        const outcome = { ...init };
        outcome.current_page = 1;

        expect(reducer(init, prevPage())).toEqual(outcome);
    });

    it('should not go to prev page', () => {
        expect(reducer(initialState, prevPage())).toEqual(initialState);
    });

    it('should go to page 4', () => {
        const init = { ...initialState };
        init.total_page = 4;
        const outcome = { ...init };
        outcome.current_page = 4;

        const payload = { ...init };
        payload.current_page = 4;
        expect(reducer(init, goToPage(payload))).toEqual(outcome);
    });

    it('should not go to page 4', () => {
        const init = { ...initialState };
        init.total_page = 3;
        const outcome = { ...init };
        const payload = { ...init };
        payload.current_page = 4;

        expect(reducer(init, goToPage(payload))).toEqual(outcome);
    });

    it('should update the total page after fetched resuls from API', () => {
        const payload = { ...initialState };
        payload.total_page = 10;
        
        
        expect(reducer(initialState, updateTotalPage(payload))).toEqual(payload);
    });

});