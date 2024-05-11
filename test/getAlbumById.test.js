import { test, expect } from 'vitest';
import axios from 'axios';

const baseURL = 'http://localhost:8800/albums';

test('GET /:id should return an album by id', async () => {
    const response = await axios.get(`${baseURL}/14`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(14); // Assuming the first album has id 1
});

test('GET /:id should handle error if album not found', async () => {
    // Mock a request for a non-existing album by providing an invalid id
    try {
        await axios.get(`${baseURL}/999`);
    } catch (error) {
        expect(error.response.status).toBe(404);
    }
});
