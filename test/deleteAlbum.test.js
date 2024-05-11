import { test, expect } from 'vitest';
import axios from 'axios';

const baseURL = 'http://localhost:8800/albums';

test('DELETE /:id should delete an album', async () => {
    // Assuming there is an album with id 30 in the database
    const albumIdToDelete = 36;
    try {
        const response = await axios.delete(`${baseURL}/${albumIdToDelete}`);
        expect(response.status).toBe(200);
        expect(response.data).toBe(1); // Assuming the response returns the deleted album id
    } catch (error) {
        throw new Error(`Failed to delete album: ${error.message}`);
    }
});

test('DELETE /:id should return error if album not found', async () => {
    // Assuming there is no album with id 999 in the database
    const nonExistentAlbumId = 999;
    try {
        const response = await axios.delete(`${baseURL}/${nonExistentAlbumId}`);
        expect(response.status).toBe(404);
        expect(response.data).toMatchObject({ error: 'Album not found' });

    } catch (error) {
        console.log(`Failed to handle deletion of non-existent album: ${error.message}`);
    }
});
