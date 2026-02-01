/**
 * Podcast card component
 * Displays individual podcast information in a card format
 * @module createPodcastCard
 */

import * as dates from '../utils/DateUtils.js';
import { getAllGenres } from '../utils/GenreService.js';
import { createModal } from './createModal.js';

/**
 * Creates a podcast card element with image, title, seasons count, genres, and last updated date
 * Clicking the card will open a detailed modal view of the podcast
 * @function createPodcastCard
 * @param {Object} podcast - The podcast data object
 * @param {string} podcast.id - Unique identifier for the podcast
 * @param {string} podcast.title - Title of the podcast
 * @param {string} podcast.description - Description of the podcast
 * @param {string} podcast.image - URL of the podcast cover image
 * @param {number} podcast.seasons - Number of seasons available
 * @param {Array<number>} podcast.genres - Array of genre IDs
 * @param {string} podcast.updated - ISO date string of last update
 * @returns {HTMLElement} A div element containing the formatted podcast card
 */
export function createPodcastCard(podcast) {
    const card = document.createElement('div');
    card.className = 'podcast-card';
    card.innerHTML = `
        <img src="${podcast.image}" alt="${podcast.title} Cover" class="podcast-image"/>
         <div class="podcast-info">
            <h3 class="podcast-title">${podcast.title}</h3>
            <p class="podcast-seasons">${podcast.seasons} Seasons</p>
            <p class="genres">${getAllGenres([podcast])}</p>
            <p class="podcast-update">Last Updated: ${dates.formatDate(podcast.updated).toLocaleDateString()}</p>
     </div>
    `;
    card.addEventListener('click', () => {
        createModal(podcast);
    });
    return card;
}