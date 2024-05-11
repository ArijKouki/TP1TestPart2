import { test, expect } from 'vitest';
import axios from 'axios';

const baseURL = 'http://localhost:8800/albums';

test('GET / should return all albums', async () => {
    const response = await axios.get(`${baseURL}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true); // Ensure response is an array of albums
});

test('GET / should handle error if retrieving albums fails', async () => {
    // Mock a failed request by providing an invalid URL
    try {
        await axios.get(`${baseURL}/invalid`);
    } catch (error) {
        expect(error.response.status).toBe(404);
    }
});
