import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { API_URL, ORGANISATION_ID } from './constants';
import { mockData } from './mock_data';

const handlers = [
    rest.get(`${API_URL}/org/${ORGANISATION_ID}/sample`, (req, res, ctx) => {
        const data = [];
        for (var i = 0; i < 15; i++) {
            data.push(mockData);
        }

        return res(ctx.json(data), ctx.delay(150));
    })
]

export const server = setupServer(...handlers)