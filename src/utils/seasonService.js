/**
 * Season service utility
 * Provides functions for retrieving and mapping season information
 * @module seasonService
 */

import { seasons } from '../data.js';

/**
 * Retrieves season titles for an array of podcasts based on their season IDs
 * Maps each season ID to its corresponding title from the seasons data
 * @function getAllSeasons
 * @param {Array<Object>} podcasts - Array of podcast objects
 * @param {Array<number>} podcasts[].seasons - Array of season IDs for each podcast
 * @returns {string} Comma-separated list of season titles
 */
export function getAllSeasons(podcasts) {
    const seasons = podcasts.flatMap(podcast =>
        podcast.seasons.map(seasonId => {
            const season = seasons.find(s => s.id === seasonId);
            return season ? season.title : 'Unknown';
        })
    );
    return seasons.join(', ');
}