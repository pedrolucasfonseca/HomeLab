const request = require('supertest');
const app = require('../app');

test('GET /api returns message and version', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('HomeLab API');
    expect(res.body.version).toBe('0.1.0');
});
