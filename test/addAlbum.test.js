import { test, expect } from 'vitest';
import axios from 'axios';

const baseURL = 'http://localhost:8800/albums';

test('POST / should add a new album', async () => {
    const albumData = {
        nom: 'Test Album',
        prix_unitaire: 10,
        quantite: 100,
        img:null
    };
    const response = await axios.post(`${baseURL}`, albumData);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(albumData); // Ensure added album data matches sent data
});

test('POST / should handle error if adding album fails', async () => {
    // Mock a failed request by providing invalid album data
    const invalidAlbumData = {};
    try {
        await axios.post(`${baseURL}`, invalidAlbumData);
    } catch (error) {
        expect(error.response.status).toBe(500);
    }
});
