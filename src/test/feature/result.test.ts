import { resultReducer as reducer, updateMeta, updateData } from '../../feature/result';
import { mockData } from '../../resources/mock_data';
import { ResultState  } from '../../resources/types';

describe('Result reducer testing', () => {

    let initialState:ResultState;

    beforeEach(() => {
        initialState = {
            data: [],
            meta: { total: 0 },
            status: 'pending'
        }
    })

    it('testing initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('update total records', () => {
        const outcome = { ...initialState };
        outcome.meta.total = 1
        
        expect(reducer(initialState, updateMeta({ total: 1 }))).toEqual(outcome);
    });

    it('insert new data', () => {
        const outcome = { ...initialState };
        outcome.data.push(mockData);


        expect(reducer(initialState, updateData({
            data: [mockData]
        }))).toEqual(outcome);
    });

});