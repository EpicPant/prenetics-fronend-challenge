import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResultType, ResultState } from "../resources/types";
import { RootState } from "../store";
import { fetchResultsFormAPI } from './api';

const initialState: ResultState = {
    data: [],
    meta: {
        total: 0
    },
    status: 'pending'
}

export const getResultsFromAPI = createAsyncThunk('result/getResults', async (_, { getState }) =>{
    const state: RootState = getState() as RootState;
    const response = await fetchResultsFormAPI(state);
    return response
});

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        updateMeta: (state, action: PayloadAction<{ total: number }>) => {
            state.meta.total = action.payload.total;
        },
        updateData: (state, action: PayloadAction<{ data: ResultType[] }>) => {
            state.data = action.payload.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getResultsFromAPI.pending, (state) => {
            state.status = 'pending'
            state.data = [];
        });
        builder.addCase(getResultsFromAPI.fulfilled, (state, { payload }) => {
            state.status = 'fulfilled';
            state.data = [...payload!.data];
            state.meta.total = payload!.meta.total;
        });
        builder.addCase(getResultsFromAPI.rejected, (state) => {
            state.status = 'rejected';
            state.data = [];
        });
    }
});

export const { updateData, updateMeta }  = resultSlice.actions
export const resultReducer = resultSlice.reducer;