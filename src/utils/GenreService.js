/**
 * Genre service utility
 * Provides functions for retrieving and mapping genre information
 * @module GenreService
 */

import { genres } from '../data.js';

/**
 * Retrieves genre titles for an array of podcasts based on their genre IDs
 * Maps each genre ID to its corresponding title from the genres data
 * @function getAllGenres
 * @param {Array<Object>} podcasts - Array of podcast objects
 * @param {Array<number>} podcasts[].genres - Array of genre IDs for each podcast
 * @returns {string} Comma-separated list of genre titles
 */
export function getAllGenres(podcasts) {
    const genreNames = podcasts.flatMap(podcast =>
        podcast.genres.map(genreId => {
            const genre = genres.find(g => g.id === genreId);
            return genre ? genre.title : 'Unknown';
        })
    );
    return genreNames.join(', ');
}
