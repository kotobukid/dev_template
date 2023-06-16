// import {describe, expect, test} from '@jest/globals';
// import { afterEach, beforeEach, expect, test } from '@jest/globals'
import {app} from "./app.js";

import request from 'supertest';

describe('GET /', (): void => {
    it('responds with sum 100 and 200', async (): Promise<void> => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    });
});

describe('GET /sum/100/200', (): void => {
    it('responds with sum 100 and 200', async (): Promise<void> => {
        const response = await request(app).get('/sum/100/200');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('sum is 300');
    });
});