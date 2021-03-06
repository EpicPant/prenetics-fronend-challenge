import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { searchReducer } from './feature/search';
import { paginationReducer } from './feature/pagination';
import { resultReducer } from './feature/result';
import { organisationReducer } from './feature/organisation';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        pagination: paginationReducer,
        result: resultReducer,
        organisation: organisationReducer
    },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;