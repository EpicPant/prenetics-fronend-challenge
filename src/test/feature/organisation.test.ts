import { organisationReducer as reducer, switchOrganisation } from "../../feature/organisation";
import { OrganisationState } from "../../resources/types";

describe('Organisation state testing', () => {
    let initialState: OrganisationState;

    beforeEach(() => {
        initialState = {
            name: 'Circle'
        }
    });

    test('testing initial state should be with name Circle', () => {
        expect(reducer(undefined, { type: ''})).toEqual(initialState);
    });

    test('testing switchOrganisation action', () => {
        expect(reducer(initialState, switchOrganisation())).toEqual({ name: 'Prenetics' })
    });

});