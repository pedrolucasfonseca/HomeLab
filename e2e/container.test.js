const { describe } = require('node:test');
const request = require('supertest');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001';

describe('container E2E', () => {
    test('GET /health retorns status ok', async () => {
        const res = await request(BASE_URL).get('/health');

        expect(res.status).toBe(200);
        expect(res.body.status).toBe('ok');
        expect(res.body.timestamp).toBeDefined();
    });

    test('GET /api retorns API infos', async () => {
        const res = await request(BASE_URL).get('/api');

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('HomeLab API');
        expect(res.body.version).toBe('0.1.0');
    });

    test('non-existent route returns 404', async () => {
        const res = await request(BASE_URL).get('/non-existent');

        expect(res.status).toBe(404);
    });
});