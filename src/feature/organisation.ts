import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrganisationState } from '../resources/types';

const initialState: OrganisationState = {
    name: 'Circle'
};

export const organisationSlice = createSlice({
    name: 'organisation',
    initialState,
    reducers: {
        switchOrganisation: (state) => {
            state.name === 'Circle' ? state.name = 'Prenetics' : state.name = 'Circle';
        }
    }
});

export const { switchOrganisation } = organisationSlice.actions;
export const organisationReducer = organisationSlice.reducer;