import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { API_URL, ORGANISATION_ID } from './constants';
import { mockAPIResponse } from './mock_data';

const handlers = [
    rest.get(`${API_URL}/org/${ORGANISATION_ID}/sample`, (_, res, ctx) => {
        return res(ctx.json(mockAPIResponse));
    })
]

export const server = setupServer(...handlers)